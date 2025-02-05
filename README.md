# **SpeakEasy: Online Tutor Booking Platform**

SpeakEasy is an interactive and user-friendly online platform designed to connect users with tutors for various languages and subjects. It simplifies the process of finding, reviewing, and booking tutors, promoting accessible learning opportunities worldwide.

## 🚀 Live Website
[SpeakEasy Live Site](https://language--exchange-a-11.web.app)

## 🌐 API Link
[Vercel API](https://language-express-server-a-10.vercel.app)

---
## 🛠️ Technologies Used

- **Frontend**: React, React Router, Tailwind CSS, React Tooltip, React Icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: Firebase Authentication, JWT.
- **Hosting**: Firebase (frontend), Vercel (backend).

---

### **Core Functionality**
- **Find Tutors**: Browse and filter tutors based on categories and search criteria.
- **Book Tutors**: Securely book sessions with tutors.
- **Add Tutorials**: Logged-in users can add tutorial details.
- **Manage Tutorials**: Update or delete tutorials from the "My Tutorials" page.
- **Review System**: Increase review count for tutors to improve visibility.




## 🔧 Environment Setup

### **Step 1: Clone the Client-Side Repository**
1. Clone the client-side repository:
   ```bash
   git clone https://github.com/ashrafulhossain1/language-exchange-server
   ```

2. Navigate to the client directory:
   ```bash
   cd language-exchange-server
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
   npm start
   ```

---




================================================
#### **Server**
```
PORT=<Your Server Port>
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
```

### **Run the Application**
```bash
# Client
npm run dev

# Server
npm run start
```

---

## ⚠️ Deployment Guidelines

1. Ensure the server is deployed and running without CORS, 404, or 504 errors.
2. Add your domain for Firebase authorization.
3. Test all private routes and ensure the JWT token functions correctly.
4. Verify the live links:
   - Client: [SpeakEasy Live Site](https://language--exchange-a-11.web.app)
   - Server: [Vercel API](https://language-express-server-a-10.vercel.app)

---

## 🌟 Commit Guidelines

- **Client**: Minimum 15 meaningful commits with descriptive messages.
- **Server**: Minimum 8 meaningful commits with descriptive messages.

---

## 👨‍💻 Contributors
- **Ashraful Hossain**

---

Feel free to explore the [SpeakEasy Live Site](https://language--exchange-a-11.web.app) and experience the future of language learning!
