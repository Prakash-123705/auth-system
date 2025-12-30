# Frontend Dashboard Application

A responsive, feature-rich React.js dashboard application with user authentication, data visualization, and API integration.

## ✨ Features

### 🔐 Authentication System

- **Login Page**: Secure login with email and password validation
- **Registration Page**: User registration with form validation
  - Email format validation
  - Password strength requirements (minimum 6 characters)
  - Password confirmation matching
  - Name validation

### 📊 Dashboard

- **Responsive Layout**: Sidebar navigation + Top navbar
- **Statistics Cards**: Display key metrics (Total Users, Total Posts, Active Users)
- **User Cards**: Display user information fetched from JSONPlaceholder API
- **Post Cards**: Display blog posts with excerpt
- **Data Visualization**: Cards and widgets with real data

### 👤 User Profile

- **Profile Display**: View selected user details
- **User Selector**: Choose different users to view their profiles
- **Edit Mode**: Edit user information
- **Nested Data**: Display company and address information

### 📱 Responsive Design

- **Desktop**: Multi-column layouts with sidebar
- **Tablet**: Optimized grid layouts
- **Mobile**: Single-column responsive design
- **Media Queries**: Breakpoints at 1024px, 768px, and 480px

### 🌐 API Integration

- **JSONPlaceholder**: Fetches real data from public API
- **Users Endpoint**: Display 10 users with complete information
- **Posts Endpoint**: Display 12 recent posts
- **No External Dependencies**: Uses only fetch API

### 🔄 State Management

- **Context API**: Global state management for authentication and data
- **useAuth Hook**: Custom hook for easy access to auth state
- **Callback Functions**: useCallback for optimized API calls

## 📁 Project Structure

```
auth-system/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Login.js          # Login component with validation
│   │   ├── Register.js       # Registration component with validation
│   │   ├── Dashboard.js      # Main dashboard with widgets and cards
│   │   ├── Profile.js        # User profile with edit capability
│   │   ├── Navbar.js         # Top navigation bar
│   │   └── Sidebar.js        # Side navigation
│   ├── context/
│   │   └── AuthContext.js    # Context API for state management
│   ├── App.js                # Main app component with routing
│   ├── App.css               # Responsive styling
│   ├── index.js              # Entry point with AuthProvider
│   └── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

```bash
cd auth-system
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📖 Usage Guide

### 1. Registration

- Click "Register here" on the login page
- Fill in your name, email, and password
- Passwords must be at least 6 characters
- Confirm your password
- Click "Register" to create an account

### 2. Login

- Enter your registered email and password
- Click "Login" to access the dashboard

### 3. Dashboard

- View statistics cards showing total users, posts, and active users
- Browse recent users with their contact information
- View recent blog posts from the JSONPlaceholder API
- Click on the "Profile" link in the sidebar to view user profiles

### 4. Profile Page

- Select different users from the dropdown
- View detailed user information including:
  - Basic info (name, email, phone, website)
  - Company information
  - Address details
- Click "Edit Profile" to modify user information
- Save or cancel your changes

### 5. Logout

- Click the "Logout" button in the navbar to log out

## 🎨 Styling & Design

### Color Scheme

- **Primary**: Gradient (667eea to 764ba2) - Purple/Blue
- **Secondary**: Dark (2c3e50) - Sidebar
- **Background**: Light Gray (#f0f2f5)
- **Success**: Green (#27ae60)
- **Error**: Red (#e74c3c)

### Typography

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold with varying sizes
- **Body**: Regular 14-16px

## 🔧 Technical Implementation

### Context API Setup

The app uses React Context for global state management:

- Authentication state (user, isLoggedIn)
- Current page navigation
- API data (apiUsers, apiPosts)
- Loading states

### Form Validation

- Email format validation using regex
- Password strength requirements
- Required field validation
- Confirmation password matching

### API Integration

- Fetches data from JSONPlaceholder API
- useCallback hooks for optimized API calls
- Error handling for failed requests
- Loading states for better UX

### Responsive Design

- CSS Grid for layouts
- Flexbox for components
- Media queries for breakpoints
- Mobile-first approach

## 🔐 Security Notes

⚠️ **Important**: This is a demonstration project using localStorage for user data.

For production applications:

- Use secure backend authentication
- Implement JWT tokens
- Store sensitive data server-side
- Use HTTPS
- Add CORS security measures
- Implement rate limiting

## 🌐 API Reference

### JSONPlaceholder Endpoints Used

**Get All Users**

```
GET https://jsonplaceholder.typicode.com/users
```

**Get All Posts**

```
GET https://jsonplaceholder.typicode.com/posts
```

## 📝 Form Validation Rules

### Registration

- **Name**: Required, non-empty
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters
- **Confirm Password**: Must match password field

### Login

- **Email**: Required
- **Password**: Required

## 🚀 Future Enhancements

- [ ] Add Redux Toolkit for larger state management
- [ ] Implement React Router for better routing
- [ ] Add unit tests with Jest and React Testing Library
- [ ] Add E2E tests with Cypress
- [ ] Implement backend API integration
- [ ] Add real-time notifications
- [ ] Add user preferences/settings
- [ ] Implement dark mode
- [ ] Add data export functionality
- [ ] Add pagination for data tables

## 📦 Dependencies

- react@^19.2.3
- react-dom@^19.2.3
- react-scripts@5.0.1

## 📜 License

This project is open source and available for educational purposes.

## 💡 Tips

1. **Test Registration/Login**: Use dummy data as credentials are stored in localStorage
2. **View Live Data**: Dashboard fetches real data from JSONPlaceholder API
3. **Responsive Testing**: Open DevTools (F12) and use Device Toolbar to test mobile views
4. **Profile Editing**: Changes made to profiles are stored in component state (not persistent)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## ❓ Troubleshooting

**Issue**: Components not rendering after login

- **Solution**: Clear localStorage and try registering again

**Issue**: API data not loading

- **Solution**: Check internet connection and browser console for errors

**Issue**: Styles not applying

- **Solution**: Clear browser cache and restart dev server

---

**Happy coding! 🎉**
