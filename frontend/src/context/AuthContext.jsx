import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USER } from '../assets/sports-data';

const AuthContext = createContext();

const REGISTERED_USERS_KEY = 'quickcourt_registered_users';
const CURRENT_USER_KEY = 'quickcourt_current_user';
const PENDING_VERIFICATION_KEY = 'quickcourt_pending_verification';

// Helper password validator
export function validatePassword(password) {
  if (!password) return { isValid: false, message: 'Password is required' };
  if (password.length < 8 || password.length > 20) {
    return { isValid: false, message: 'Password must be between 8 and 20 characters' };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' };
  }
  if (!/[0-9]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' };
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special symbol like @ or #' };
  }
  return { isValid: true, message: '' };
}

export function AuthProvider({ children }) {
  // Registered users database
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem(REGISTERED_USERS_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [
      {
        ...INITIAL_USER,
        password: 'Password@123'
      }
    ];
  });

  // Current logged-in user
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(CURRENT_USER_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return INITIAL_USER; // Default logged in as Mitchell Admin as in Excalidraw design
  });

  // Pending signup awaiting OTP verification
  const [pendingSignup, setPendingSignup] = useState(() => {
    const saved = localStorage.getItem(PENDING_VERIFICATION_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [user]);

  useEffect(() => {
    if (pendingSignup) {
      localStorage.setItem(PENDING_VERIFICATION_KEY, JSON.stringify(pendingSignup));
    } else {
      localStorage.removeItem(PENDING_VERIFICATION_KEY);
    }
  }, [pendingSignup]);

  // Login handler
  const login = (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const existing = users.find(u => u.email.toLowerCase() === trimmedEmail);

    if (!existing) {
      return { success: false, errorField: 'email', message: 'No account found with this email' };
    }

    if (existing.password !== password) {
      return { success: false, errorField: 'password', message: 'Incorrect password. Please try again.' };
    }

    const authUser = {
      id: existing.id,
      name: existing.name,
      email: existing.email,
      role: existing.role || 'Player',
      avatar: existing.avatar,
      city: existing.city || 'ahmedabad',
      memberSince: existing.memberSince || 'June 2025'
    };

    setUser(authUser);
    return { success: true, user: authUser };
  };

  // Initiate Sign Up (proceeds to OTP verification)
  const startSignUp = ({ name, email, role, avatar, password }) => {
    const trimmedEmail = email.trim().toLowerCase();
    const existing = users.find(u => u.email.toLowerCase() === trimmedEmail);

    if (existing) {
      return { success: false, errorField: 'email', message: 'This email is already registered. Please log in or use a different email.' };
    }

    const passCheck = validatePassword(password);
    if (!passCheck.isValid) {
      return { success: false, errorField: 'password', message: passCheck.message };
    }

    const generatedOtp = '123456'; // Default demo OTP (also works with any 6 digits for user convenience)
    const newPending = {
      id: 'usr-' + Date.now(),
      name: name.trim(),
      email: trimmedEmail,
      role: role || 'Player',
      avatar: avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80',
      password,
      city: 'ahmedabad',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      otp: generatedOtp,
      createdAt: Date.now()
    };

    setPendingSignup(newPending);
    return { success: true, pendingUser: newPending };
  };

  // Verify OTP & complete registration
  const verifyEmailOtp = (otpInput) => {
    if (!pendingSignup) {
      return { success: false, message: 'No pending verification session. Please sign up again.' };
    }

    // Accept both generated OTP or standard 6-digit code
    if (otpInput.length === 6) {
      const newUser = {
        id: pendingSignup.id,
        name: pendingSignup.name,
        email: pendingSignup.email,
        role: pendingSignup.role,
        avatar: pendingSignup.avatar,
        password: pendingSignup.password,
        city: pendingSignup.city,
        memberSince: pendingSignup.memberSince
      };

      setUsers(prev => [...prev, newUser]);
      setUser({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        avatar: newUser.avatar,
        city: newUser.city,
        memberSince: newUser.memberSince
      });
      setPendingSignup(null);
      return { success: true };
    }

    return { success: false, message: 'Invalid 6-digit OTP code. Please check and try again.' };
  };

  // Edit Email during OTP verification
  const updatePendingEmail = (newEmail) => {
    if (!pendingSignup) return { success: false };
    const trimmed = newEmail.trim().toLowerCase();
    const existing = users.find(u => u.email.toLowerCase() === trimmed);
    if (existing) {
      return { success: false, message: 'Email is already taken by another account.' };
    }
    const updated = { ...pendingSignup, email: trimmed };
    setPendingSignup(updated);
    return { success: true };
  };

  // Logout
  const logout = () => {
    setUser(null);
  };

  // Update Profile details
  const updateProfile = ({ name, email, avatar, oldPassword, newPassword }) => {
    if (!user) return { success: false, message: 'You must be logged in' };

    const userInDb = users.find(u => u.id === user.id);
    if (!userInDb) return { success: false, message: 'User record not found' };

    // If changing password, verify old password
    if (newPassword) {
      if (userInDb.password && userInDb.password !== oldPassword) {
        return { success: false, errorField: 'oldPassword', message: 'Current password does not match' };
      }
      const passCheck = validatePassword(newPassword);
      if (!passCheck.isValid) {
        return { success: false, errorField: 'newPassword', message: passCheck.message };
      }
    }

    // Check if email changed and taken
    if (email && email.toLowerCase() !== user.email.toLowerCase()) {
      const emailTaken = users.some(u => u.id !== user.id && u.email.toLowerCase() === email.toLowerCase());
      if (emailTaken) {
        return { success: false, errorField: 'email', message: 'This email is already in use' };
      }
    }

    const updatedUser = {
      ...userInDb,
      name: name || userInDb.name,
      email: email || userInDb.email,
      avatar: avatar || userInDb.avatar,
      password: newPassword || userInDb.password
    };

    setUsers(prev => prev.map(u => u.id === user.id ? updatedUser : u));
    setUser({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      avatar: updatedUser.avatar,
      city: updatedUser.city,
      memberSince: updatedUser.memberSince
    });

    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        pendingSignup,
        login,
        startSignUp,
        verifyEmailOtp,
        updatePendingEmail,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
