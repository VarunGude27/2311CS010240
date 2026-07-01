# Campus Notification System Design

## Stage 1 – REST API Design

### Objective

The Campus Notification System is designed to deliver important announcements such as placement drives, examination results, academic updates, and campus events to students in a secure and efficient manner. The APIs follow REST principles and use JWT-based authentication to ensure that only authorized users can access notification data.

---

## Base URL

```
/api/v1
```

---

## Authentication

All API requests require a valid JWT access token.

**Header**

```
Authorization: Bearer <ACCESS_TOKEN>
```

---

# 1. Retrieve Notifications

Returns all notifications available for the authenticated student. The notifications are sorted by their creation time, with the most recent appearing first.

### Endpoint

```
GET /notifications
```

### Success Response (200 OK)

```json
{
  "success": true,
  "totalNotifications": 2,
  "notifications": [
    {
      "notificationId": "N1001",
      "title": "Amazon Campus Recruitment",
      "message": "Online assessment starts from 10:00 AM tomorrow.",
      "category": "Placement",
      "read": false,
      "createdAt": "2026-07-01T09:30:00Z"
    },
    {
      "notificationId": "N1002",
      "title": "Annual Technical Fest",
      "message": "Registrations are now open for all departments.",
      "category": "Event",
      "read": true,
      "createdAt": "2026-06-30T15:20:00Z"
    }
  ]
}
```

---

# 2. Create a Notification

Creates a new notification that can later be delivered to one or more students.

### Endpoint

```
POST /notifications
```

### Request Body

```json
{
  "title": "Mid Semester Results",
  "message": "Results for Semester VI have been published.",
  "category": "Result"
}
```

### Success Response

```json
{
  "success": true,
  "notificationId": "N1050",
  "message": "Notification created successfully."
}
```

---

# 3. Update Notification

Allows administrators to modify the content of an existing notification.

### Endpoint

```
PUT /notifications/{notificationId}
```

### Request Body

```json
{
  "title": "Updated Placement Schedule",
  "message": "The interview timing has been changed.",
  "category": "Placement"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Notification updated successfully."
}
```

---

# 4. Delete Notification

Removes an existing notification from the system.

### Endpoint

```
DELETE /notifications/{notificationId}
```

### Success Response

```json
{
  "success": true,
  "message": "Notification deleted successfully."
}
```

---

# 5. Mark Notification as Read

Updates the notification status after it has been viewed by the student.

### Endpoint

```
PATCH /notifications/{notificationId}/read
```

### Success Response

```json
{
  "success": true,
  "message": "Notification status updated."
}
```

---

# 6. Retrieve Unread Notifications

Returns only the notifications that have not yet been read by the authenticated student.

### Endpoint

```
GET /notifications/unread
```

### Success Response

```json
{
  "success": true,
  "unreadCount": 3,
  "notifications": [
    {
      "notificationId": "N1045",
      "title": "Hackathon Registration",
      "category": "Event"
    }
  ]
}
```

---

## Real-Time Notification Delivery

To provide instant notification updates without requiring the user to refresh the application, the system uses **WebSocket (Socket.IO)**. Whenever a new notification is created, the server pushes it directly to all connected users. This approach improves responsiveness and provides a better user experience compared to periodic polling.