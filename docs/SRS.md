# Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose

This document defines the functional and non-functional requirements for a minimal cross-platform application designed to capture fleeting thoughts via mobile and review them later via web.

### 1.2 Scope

The system provides:

- Fast mobile thought capture with character limit
    
- Chronological review interface web
    
- Time-based note aging (visual decay)
    
- Promotion of selected notes to permanent status
    
- Optional account-based synchronization across devices
    

The system emphasizes minimal friction, cognitive decluttering, and intentional note retention.

---

## 2. Overall Description

### 2.1 Product Perspective

The system consists of:

- Mobile application (primary input interface)
    
- Web application (review interface)
    
- Backend API
    
- Relational database (PostgreSQL)

The system supports optional cloud synchronization and local-only mode.

---

### 2.2 Product Functions (High-Level)

The system shall:

- Allow users to create short notes from mobile
    
- Store notes with timestamps
    
- Display notes chronologically
    
- Apply visual aging to unreviewed notes
    
- Allow promotion of notes to permanent status
    
- Automatically delete expired notes (with 7 days in "Trash" period)
    
- Allow optional user authentication for sync
    
---

### 2.3 User Classes

1. Guest User (local-only mode)
    
2. Registered User (synchronized mode)

---

### 2.4 Operating Environment

Mobile:
    
- Android
    
Desktop/Web:

- Modern web browsers (Chrome, Safari, Firefox)
    

Backend:

- Node.js runtime
    
- PostgreSQL database
    
---


## 3. System Features

### 3.1 Mobile Note Capture

**Description:**  
Allows users to quickly capture short thoughts.

**Functional Requirements:**

- FR-1: The system shall provide a text input field immediately upon app launch.
    
- FR-2: The system shall enforce a configurable character limit.
    
- FR-3: The system shall allow note submission via swipe gesture.
    
- FR-4: The system shall timestamp each note automatically.
    
- FR-5: The system shall store notes locally by default.
    
- FR-6: The system shall allow optional account login for sync.
    
- FR-7: The system shall allow auto-close behavior after submission (optional, default setting).
    
---

### 3.2 Note Storage

- FR-8: Each note shall include:
    
    - Unique ID
        
    - Content
        
    - Created timestamp
        
    - Status (pending | permanent | deleted)
        
    - Expiration timestamp (if pending)
        
- FR-9: Pending notes shall expire automatically after a configurable number of days.
    
- FR-10: Expired notes shall be soft-deleted for a configurable retention period (default is 7 days).  

---

### 3.3 Web Review

**Description:**  
Allows users to review and manage captured notes.

**Functional Requirements:**

- FR-11: The system shall display notes in reverse chronological order.
    
- FR-12: The system shall visually indicate note aging.
    
- FR-13: The system shall allow promoting a note to permanent status.
    
- FR-14: The system shall allow deletion of notes.
    
- FR-15: The system shall provide search functionality.
    
- FR-16: The system shall allow editing of pending notes.
    
- FR-17: The system shall display a soft-deleted notes view (Trash).
    
---

### 3.4 Synchronization

- FR-18: The system shall allow optional user account creation.
    
- FR-19: The system shall authenticate users via username/password.
    
- FR-20: The system shall sync notes between mobile and web when logged in.
    
- FR-21: The system shall maintain data consistency across devices.
    

---


## 4. Non-Functional Requirements

### 4.1 Performance

- NFR-1: Note creation shall complete within 500ms.
    
- NFR-2: Web interface shall load within 2 seconds under normal conditions.
    
---

### 4.2 Security

- NFR-3: Passwords shall be securely hashed.
    
- NFR-4: Data shall be encrypted at rest.
    
- NFR-5: Communication shall occur over HTTPS.

---

### 4.3 Usability

- NFR-7: Mobile note capture shall require no more than two interactions.
    
- NFR-8: No notifications shall be used for engagement loops.
    
---

### 4.4 Reliability

- NFR-10: The system shall prevent data loss during normal operation.

---


## 5. Future Enhancements (Out of MVP Scope)

- AI-assisted tagging
    
- Export to Markdown
    
- End-to-end encryption
    
- Mood tracking carousel

---


## 6. Constraints

- The initial release shall avoid feature complexity.
    
- The system shall prioritize clarity and simplicity over extensibility.
    
- The architecture shall allow future encryption integration.
    
---


## 7. Assumptions

- Users primarily capture short thoughts.
    
- Web is used for reflective review.
    
- Users understand that unpromoted notes may expire.
    
---


# End of Document