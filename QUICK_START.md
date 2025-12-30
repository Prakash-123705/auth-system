# Quick Start Guide

## 🎯 Start the Application

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm start
```

The app will automatically open at `http://localhost:3000`

## 📝 Test the Application

### Option 1: Create New Account

1. Click "Register here"
2. Enter details:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123
   - Confirm: password123
3. Click "Register"

### Option 2: Quick Login (if registered before)

1. Enter your registered email
2. Enter your password
3. Click "Login"

## 🎨 Explore Features

### Dashboard Page

- ✅ View statistics cards
- ✅ Browse user list from API
- ✅ See recent posts
- ✅ All data fetched from JSONPlaceholder API

### Profile Page

1. Click "Profile" in sidebar
2. Use dropdown to select different users
3. Click "✏️ Edit Profile" to modify info
4. Click "✓ Save Changes" or "✗ Cancel"

### Logout

- Click "Logout" button in navbar (top right)

## 📱 Test Responsive Design

1. Open DevTools: Press `F12`
2. Click Device Toolbar icon (mobile icon)
3. Select different devices to test:
   - iPhone SE
   - iPad
   - Desktop

## ✨ Key Features to Try

1. **Form Validation**

   - Try registering without confirming password
   - Try entering invalid email format
   - Try short password (< 6 chars)

2. **API Integration**

   - View real users from JSONPlaceholder API
   - See real blog posts
   - Check network tab to see API calls

3. **Navigation**

   - Switch between Dashboard and Profile
   - Use sidebar links
   - Logo in navbar acts as home button

4. **Edit Profile**
   - Select a user from dropdown
   - Click Edit Profile
   - Modify any field
   - Save or cancel changes

## 📋 Default Test Data Structure

Each user contains:

```javascript
{
  id: 1,
  name: "User Name",
  email: "user@example.com",
  phone: "+1-234-567-8900",
  website: "example.com",
  company: {
    name: "Company Name",
    catchPhrase: "Catch Phrase"
  },
  address: {
    street: "Street Name",
    city: "City Name",
    zipcode: "12345"
  }
}
```

## 🐛 Troubleshooting

| Problem                       | Solution                                       |
| ----------------------------- | ---------------------------------------------- |
| Port 3000 in use              | Change port in terminal: `PORT=3001 npm start` |
| Blank screen                  | Clear cache: Ctrl+Shift+Delete, then reload    |
| API data not loading          | Check internet, refresh page                   |
| Sidebar not visible on mobile | Sidebar is responsive, check device view       |

## 📚 File Locations

- **Components**: `src/components/`
- **Styling**: `src/App.css`
- **Context**: `src/context/AuthContext.js`
- **Main App**: `src/App.js`

## 🔗 API Endpoints

Dashboard uses these free APIs:

- Users: `https://jsonplaceholder.typicode.com/users`
- Posts: `https://jsonplaceholder.typicode.com/posts`

## ⚙️ Available Scripts

```bash
npm start      # Start development server
npm build      # Build for production
npm test       # Run tests
npm eject      # Eject configuration (not reversible)
```

---

**Ready to explore? Start with `npm start`! 🚀**
