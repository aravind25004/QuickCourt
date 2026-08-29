Backend flow:
User
 │
 ├── Sport
 │
 └── Facility
       │
       └── Court
             │
             ├── BlockedSlot
             │
             └── Booking
                    │
                    └── Payment
                         
Booking ─── Review

User ─── Match ─── MatchParticipant

User ─── Notification
User ─── Favorite
User ─── Report
User ─── AuditLog