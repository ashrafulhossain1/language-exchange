# **SpeakEasy: Online Tutor Booking Platform**

SpeakEasy is an interactive and user-friendly online platform designed to connect users with tutors for various languages and subjects. It simplifies the process of finding, reviewing, and booking tutors, promoting accessible learning opportunities worldwide.

## 🚀 Live Website
[SpeakEasy Live Site](https://language--exchange-a-11.web.app)

## 🌐 API Link
[Vercel API](https://language-express-server-a-10.vercel.app)

---

## ✨ Key Features

### **User Experience**
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Dark/Light Theme**: Toggle between themes for a comfortable viewing experience.
- **Smooth Animations**: Enhanced interactivity with modern animations.

### **User Management**
- **Authentication**: Login and register using email/password or Google.
- **JWT Authentication**: Secures private routes and API calls.
- **Error Notifications**: Displays relevant error messages for login, registration, and private routes.

### **Core Functionality**
- **Find Tutors**: Browse and filter tutors based on categories and search criteria.
- **Book Tutors**: Securely book sessions with tutors.
- **Add Tutorials**: Logged-in users can add tutorial details.
- **Manage Tutorials**: Update or delete tutorials from the "My Tutorials" page.
- **Review System**: Increase review count for tutors to improve visibility.

### **Additional Features**
- **404 Page**: Custom error page for unmatched routes.
- **Loading State**: Smooth transitions with appropriate loading indicators.

---

## 📋 Pages Overview

### **1. Home Page**
- Banner/carousel showcasing the platform's benefits.
- Stats Section: Displays counts for tutors, reviews, languages, and users.
- Language Categories: Minimum of 9 clickable cards directing to relevant tutors.
- Additional sections relevant to the website's theme.

### **2. Find Tutors Page**
- Displays all available tutors.
- Search functionality to filter tutors by language.
- "Details" button redirects to the Tutor Details page.

### **3. Tutor Details Page (Private)**
- Shows detailed information about the selected tutor, including name, image, language, description, price, and reviews.
- "Book" button stores booking information in the database.

### **4. My Booked Tutors Page (Private)**
- Displays all booked tutors with options to review them.

### **5. Add Tutorials Page (Private)**
- A form to add new tutorials, including fields for name, email, image, language, price, and description.
- Reviews default to 0.

### **6. My Tutorials Page (Private)**
- Displays a list of tutorials added by the user.
- Options to update or delete tutorials.

### **7. Update Tutorial Page (Private)**
- Allows editing fields for an existing tutorial (name and reviews are not editable).

---

## 🛠️ Technologies Used

- **Frontend**: React, React Router, Tailwind CSS, React Tooltip, React Icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: Firebase Authentication, JWT.
- **Hosting**: Firebase (frontend), Vercel (backend).

---

## 🔧 Environment Setup

### **Clone the Repositories**
```bash
# Client
https://github.com/programming-hero-web-course2/b10-a10-client-side-ashrafulhossain1

# Server
https://github.com/programming-hero-web-course2/b10-a10-server-side-ashrafulhossain1
```

### **Install Dependencies**
```bash
# Navigate to the client folder
cd client
npm install

# Navigate to the server folder
cd server
npm install
```

### **Environment Variables**
Create a `.env` file in the root directories and include the following:

#### **Client**
```
VITE_API_URL=<Your API URL>
```

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
