# To-Do Project

A modern React-based to-do list application with user authentication, task management, and responsive design.

## Features

- **User Authentication**: Login and signup functionality with protected routes
- **Task Management**: Add, delete, and mark tasks as complete
- **Task Details**: View detailed information about individual tasks
- **Persistent Storage**: Tasks are saved to localStorage
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Form Validation**: Uses Formik and Yup for robust form handling
- **Routing**: Client-side routing with React Router DOM

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Forms**: Formik with Yup validation
- **Deployment**: GitHub Pages

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todoproject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting
- `npm run deploy` - Deploy to GitHub Pages (requires build first)

## Usage

1. **Sign Up/Login**: Create an account or log in to access the app
2. **Home**: Navigate to the home page
3. **Tasks**: View and manage your to-do list
   - Add new tasks
   - Mark tasks as complete/incomplete
   - Delete tasks
   - Click on tasks to view details
4. **Profile**: Access your user profile

## Project Structure

```
src/
├── components/
│   ├── btn.jsx
│   ├── card.jsx
│   ├── guard.jsx
│   └── nav.jsx
├── pages/
│   ├── home.jsx
│   ├── login.jsx
│   ├── profile.jsx
│   ├── signup.jsx
│   ├── taskDetails.jsx
│   └── tasks.jsx
├── myContext/
│   ├── authProvider.jsx
│   └── context.js
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

The project is configured for deployment to GitHub Pages:

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`

The `predeploy` script automatically runs the build before deployment.

## Contributing

This is a lab project for learning React development. Feel free to explore and modify the code for educational purposes.
