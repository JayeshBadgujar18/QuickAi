# QuickAI

QuickAI is a comprehensive React-based platform offering a suite of powerful AI-driven tools. Through a unified, beautiful dashboard, QuickAI empowers creators, marketers, and developers to generate, edit, and review content flawlessly. 

## 🚀 Features

- **AI Article Writer:** Generate high-quality, engaging articles of various lengths on any topic. 
- **Blog Title Generator:** Produce catchy and SEO-friendly titles customized to specific keywords and blog categories.
- **AI Image Generation:** Create stunning visual assets via prompt engineering with dedicated style settings.
- **Background Removal:** Seamlessly extract backgrounds from uploaded images. 
- **Object Removal:** Describe specific objects inside images and let AI surgically handle the removal.
- **Resume Reviewer:** Upload PDF resumes and receive instant AI analysis to optimize job applications.
- **Community Feed:** Browse, like, and get inspired by featured creations published by other QuickAI users.

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/) using [Vite](https://vitejs.dev/) for blazingly fast development.
- **Routing:** [React Router](https://reactrouter.com/) for fully responsive, dynamic navigation.
- **Auth:** [Clerk](https://clerk.dev/) for robust, drop-in user authentication.
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/) for rapid utility-first UI development.
- **Icons:** [Lucide-React](https://lucide.dev/)

## ⚙️ Quick Start

### 1. Installation

Ensure you have Node.js installed, then clone the repository and install the dependencies in the client directory:

```bash
git clone <repository-url>
cd QuickAi/client
npm install
```

### 2. Environment Setup

Create a `.env` file in the `client` root directory and add your Clerk API keys for authentication to function:

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
```

### 3. Start the Application

Spin up the local development server:

```bash
npm run dev
```

Your app will be automatically served at `http://localhost:5173`. We highly recommend using the development server so Vite can instantly push any modifications to the browser via Hot Module Replacement (HMR).

## 📂 Project Structure

```text
client/
├── public/                 # Static assets
└── src/
    ├── assets/             # Project globals, dummy data configs, and graphic assets
    ├── components/         # Reusable dashboard elements (Sidebar, Navbar, etc.)
    ├── pages/              # Primary view coordinates (Home, Dashboard, and AI Tool Interfaces)
    ├── App.jsx             # React Router configuration matrix
    └── index.css           # Global Tailwind and font imports
```
