# **SpeakEasy: Online Tutor Booking Platform**
SpeakEasy is a responsive and user-friendly platform designed to connect users with tutors for various languages and subjects. It simplifies the process of finding, reviewing, and booking tutors, promoting accessible learning opportunities worldwide.

## 🚀 Live Site URL
[Visit SpeakEasy](https://language--exchange-a-11.web.app)

---
![SpeakEasy Homepage](https://example.com/speakeasy-homepage.png)
---

## 🛠️ Technologies Used
- **React**: For building the user interface.
- **React Router**: For dynamic and private routing.
- **Firebase**: For authentication and hosting.
- **MongoDB**: For data storage.
- **Tailwind CSS**: For responsive styling.
- **JWT**: For secure token-based authentication.

---

## ✨ Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **User Authentication**: Supports Email/Password login and Google login with error and success notifications.
- **Tutor Management**: Add, update, delete, and view tutor details, with a personalized list for logged-in users.
- **Booking System**: Securely book sessions with tutors.
- **Review System**: Increase review count for tutors to improve visibility.
- **Sorting & Filtering**: Tutors can be filtered by category or searched dynamically.
- **Dark/Light Mode**: Toggle between dark and light themes on the homepage.

---

## 🔧 Environment Setup

### **Step 1: Clone the Client-Side Repository**
1. Clone the client-side repository:
   ```bash
   git clone https://github.com/ashrafulhossain1/language-exchange.git
   ```
2. Navigate to the client directory:
   ```bash
   cd b10-a10-client-side-ashrafulhossain1
   ```
3. Create a `.env` file in the root of the client directory and add the following Firebase credentials:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

---

### **Step 2: Install Client-Side Dependencies**
1. Install the required dependencies:
   ```bash
   npm install
   ```
2. Start the client development server:
   ```bash
   npm run dev
   ```

---

### **Step 3: Clone the Server-Side Repository**
1. Clone the server-side repository:
   ```bash
   git clone https://github.com/ashrafulhossain1/sports-express-server
   ```
2. Navigate to the server directory:
   ```bash
   cd b10-a10-server-side-ashrafulhossain1
   ```
3. Create a `.env` file in the root of the server directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

---

### **Step 4: Install Server-Side Dependencies**
1. Install the required dependencies:
   ```bash
   npm install
   ```
2. Start the server development server:
   ```bash
   nodemon start
   ```

---

## 📦 Dependencies & Dev Dependencies

### **Client-Side (React App)**

#### **Dependencies**
These are the main libraries used to build the application:
```json
"dependencies": {
  "firebase": "^9.23.0",                  // Firebase for authentication and hosting
  "react": "^18.2.0",                     // React library for building the UI
  "react-dom": "^18.2.0",                 // React DOM for rendering components
  "react-router-dom": "^6.14.2",          // React Router for dynamic routing
  "react-toastify": "^9.1.3",             // For displaying notifications (e.g., success/error messages)
  "react-tooltip": "^5.12.0",             // Tooltips for interactive UI elements
  "react-icons": "^4.10.1",               // Icons for enhanced UI
  "tailwindcss": "^3.3.3",                // Utility-first CSS framework for styling
  "axios": "^1.5.1",                      // HTTP client for API requests
  "dotenv": "^16.3.1"                     // Environment variable management
}
```

#### **Dev Dependencies**
These are tools used during development:
```json
"devDependencies": {
  "autoprefixer": "^10.4.14",             // PostCSS plugin for adding vendor prefixes
  "postcss": "^8.4.26",                   // Tool for transforming CSS
  "tailwindcss": "^3.3.3",                // Tailwind CSS for utility-based styling
  "eslint": "^8.47.0",                    // Linter for identifying and fixing code issues
  "eslint-config-prettier": "^8.10.0",    // ESLint configuration for Prettier integration
  "prettier": "^3.0.3"                    // Code formatter for consistent styling
}
```

---

### **Server-Side (Node.js App)**

#### **Dependencies**
These are the main libraries used to build the backend:
```json
"dependencies": {
  "express": "^4.18.2",                   // Web framework for Node.js
  "cors": "^2.8.5",                       // Middleware for enabling CORS
  "jsonwebtoken": "^9.0.0",               // JSON Web Token for authentication
  "cookie-parser": "^1.4.6",              // Middleware for parsing cookies
  "dotenv": "^16.3.1",                    // Environment variable management
  "mongodb": "^5.7.0"                     // MongoDB driver for database operations
}
```

#### **Dev Dependencies**
These are tools used during development:
```json
"devDependencies": {
  "nodemon": "^3.0.1"                     // Automatically restarts the server during development
}
```

---

## 🌐 API Endpoints

### **Authentication**
- **POST `/jwt`**: Generate a JWT token and set it as an HTTP-only cookie.
- **POST `/logout`**: Clear the JWT token cookie to log the user out.

---

### **Users**
- **GET `/users`**: Fetch all users (returns the total count of users).
- **GET `/users/:email`**: Fetch a specific user by email.
- **POST `/users`**: Add a new user (used during sign-up).

---

### **Tutors**
- **GET `/tutors`**: Fetch all tutors with optional filtering:
  - Query Parameters:
    - `category`: Filter tutors by language category.
    - `search`: Search tutors by language name (case-insensitive regex).
- **GET `/tutors/:email`**: Fetch tutorials added by a specific user (private).
- **GET `/tutor/:id`**: Fetch details of a specific tutor/tutorial by ID.
- **POST `/add-tutorials`**: Add a new tutor/tutorial (private).
- **PUT `/updateTutorial/:id`**: Update an existing tutor/tutorial by ID (private).
- **DELETE `/delete-tutor/:id`**: Delete a tutor/tutorial by ID (private).

---

### **Bookings**
- **POST `/add-book`**: Add a new booking (private).
- **GET `/myBooked/:email`**: Fetch bookings made by a specific user (private). The response includes aggregated data from the `tutorials` collection (e.g., tutor name, image, fee, etc.).

---

### **Reviews**
- **PATCH `/review/:tutorId`**: Increment the review count for a specific tutor by ID.

---

### **Analytics**
- **GET `/tutorCount`**: Fetch the total number of tutors available.
- **GET `/reviewsCount`**: Fetch the total number of reviews across all tutors.

---

### **Root Endpoint**
- **GET `/`**: A health check endpoint that returns "LANGUAGE EXPRESS server Is ON".

---

### **Notes on Authentication**
- **Private Routes**: The following routes require authentication via JWT token (stored in cookies):
  - `/tutors/:email`
  - `/add-tutorials`
  - `/updateTutorial/:id`
  - `/delete-tutor/:id`
  - `/add-book`
  - `/myBooked/:email`

- **Token Verification**: The `verifyToken` middleware ensures that only authenticated users can access private routes. If the token is missing or invalid, the server responds with a `401 Unauthorized` error.

---

### **CORS Configuration**
The server allows requests from the following origins:
- `http://localhost:5173` (development environment)
- `https://language--exchange-a-11.web.app` (production frontend)
- `https://language--exchange-a-11.firebaseapp.com` (Firebase hosting)

Credentials (cookies) are enabled for cross-origin requests.

---

### **Database Collections**
The server interacts with the following MongoDB collections:
1. **`tutorials`**: Stores tutor/tutorial details.
2. **`booked`**: Stores booking information.
3. **`users`**: Stores user account details.

---

### **Environment Variables**
Ensure the following environment variables are set in your `.env` file:
```env
PORT=5000
USER_USER=your_mongodb_username
USER_PASS=your_mongodb_password
JWT_ACCESS_SECRET=your_jwt_secret_key
```

---


## ⚙️ Deployment Guidelines
1. Ensure the server is deployed and running without CORS, 404, or 504 errors.
2. Add your domain for Firebase authorization.
3. Test all private routes and ensure the JWT token functions correctly.
4. Verify the live links:
   - Client: [SpeakEasy Live Site](https://language--exchange-a-11.web.app)
   - Server: [Vercel API](https://language-express-server-a-10.vercel.app)

---

