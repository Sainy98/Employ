# React User Management App

## 🚀 Live Demo
🔗 [Live Demo](#) *(Update this once deployed)*

## 📌 About the Project
This is a **React-based User Management App** that allows users to:
- View a paginated list of users.
- Edit user details.
- Delete users.
- Fetch user data from an API.
- Responsive and modern UI with animations.

## 📂 Project Structure
```
root/
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Login, UserList, EditUser)
│   ├── styles/          # Custom CSS styles
│   ├── App.js           # Main App component
│   ├── index.js         # React entry point
│   ├── api.js           # API handling (Axios)
├── package.json         # Dependencies & Scripts
├── README.md            # Project documentation
└── .gitignore           # Ignored files
```

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
The app will be available at **http://localhost:3000/**.

## 🔧 Available Scripts
| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm run lint` | Runs ESLint to check for issues |

## 🏗️ Deployment
### Deploy on Netlify (Recommended)
1. Push your code to **GitHub**.
2. Go to [Netlify](https://app.netlify.com/) and log in.
3. Click **"New Site"** → **"Import from GitHub"**.
4. Select your repository and configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build/`
5. Click **"Deploy"** and wait for deployment!

## 🔑 Assumptions & Considerations
- The API used for fetching users is [ReqRes](https://reqres.in/).
- A simple authentication mechanism using **localStorage** is implemented.
- Deleting a user does not actually remove it from the API (since ReqRes is a mock API).
- The UI is designed to be **responsive** and **mobile-friendly**.

## 📜 License
This project is licensed under the **MIT License**.

---
🙌 **Feel free to contribute, raise issues, or give suggestions!**

