import { apiClient, API_BASE_URL } from './api';

/**
 * Calls the backend to create a Razorpay order and a PENDING booking.
 * Returns { orderId, amount, currency, keyId, bookingId }
 * Throws an error if the backend call fails.
 */
export async function createRazorpayOrder(bookingData) {
  const token = localStorage.getItem('quickcourt_auth_token');
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  const response = await fetch(`${API_BASE_URL}/payment/create-order`, {
    method: 'POST',
    headers,
    body: JSON.stringify(bookingData)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Order creation failed: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Sends the Razorpay payment response to the backend for signature
 * verification. On success, the booking status becomes CONFIRMED.
 * Returns { message, booking }
 * Throws an error if verification fails.
 */
export async function verifyRazorpayPayment(paymentData) {
  const token = localStorage.getItem('quickcourt_auth_token');
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  const response = await fetch(`${API_BASE_URL}/payment/verify`, {
    method: 'POST',
    headers,
    body: JSON.stringify(paymentData)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Payment verification failed: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Opens the Razorpay Checkout popup and returns a Promise that resolves
 * with the payment response on success, or rejects on dismissal/failure.
 *
 * @param {Object} options
 * @param {string} options.keyId       – Razorpay key_id from backend
 * @param {string} options.orderId     – Razorpay order_id from backend
 * @param {number} options.amount      – Amount in paise
 * @param {string} options.currency    – e.g. "INR"
 * @param {string} options.venueName   – Used as description
 * @param {Object} options.user        – { name, email, phone }
 */
export function openRazorpayCheckout({ keyId, orderId, amount, currency, venueName, user }) {
  return new Promise((resolve, reject) => {
    if (typeof window.Razorpay !== 'function') {
      reject(new Error('Razorpay SDK not loaded. Please refresh the page and try again.'));
      return;
    }

    const options = {
      key: keyId,
      amount: String(amount),
      currency: currency,
      name: 'QuickCourt',
      description: `Court booking at ${venueName}`,
      order_id: orderId,
      prefill: {
        name: user?.name || '',
        email: user?.email || '',
        contact: user?.phone || ''
      },
      theme: {
        color: '#10B981'
      },
      handler: function (response) {
        // Payment succeeded — response contains order_id, payment_id, signature
        resolve(response);
      },
      modal: {
        ondismiss: function () {
          reject(new Error('Payment cancelled by user'));
        }
      }
    };

    const razorpayInstance = new window.Razorpay(options);

    razorpayInstance.on('payment.failed', function (response) {
      reject(new Error(response.error.description || 'Payment failed'));
    });

    razorpayInstance.open();
  });
}
