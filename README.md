# AI for Software Engineering: week1 assignment
# Mini E-Learning Platform

A simple, clean e-learning platform built with pure HTML, CSS, and JavaScript. This prototype allows users to browse courses, view lessons, track progress, and mark courses as completed.

## Features

- **Course Catalog**: Browse through 6 available courses across different topics
- **Course Details**: View individual lessons for each course
- **Progress Tracking**: Mark lessons as complete and track overall course progress
- **Persistent Storage**: Progress is saved using localStorage and persists across sessions
- **Responsive Design**: Clean, modern interface that works on desktop and mobile devices
- **Interactive UI**: Smooth hover effects and animations for better user experience

## Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling with flexbox, gradients, and animations
- **Vanilla JavaScript**: Interactivity and data management
- **localStorage**: Client-side data persistence

## File Structure

\`\`\`
├── index.html          # Home page with course list
├── course.html         # Course detail page with lessons
├── styles.css          # All styling for the platform
├── data.js            # Course data and structure
├── script.js          # Home page JavaScript logic
└── course-detail.js   # Course detail page JavaScript logic
\`\`\`

## Installation & Usage

### Option 1: Direct File Access
1. Download all files to a folder on your computer
2. Open `index.html` in your web browser
3. Start browsing courses!

### Option 2: Local Server (Recommended)
1. Download all files to a folder
2. Start a local server in that folder:
   \`\`\`bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   \`\`\`
3. Open `http://localhost:8000` in your browser

### Option 3: Deploy to Web
Upload all files to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting provider

## How It Works

### Data Structure
Courses are stored in `data.js` as a JavaScript object:
\`\`\`javascript
const coursesData = {
  1: {
    id: 1,
    title: "Course Title",
    description: "Course description",
    instructor: "Instructor Name",
    duration: "Duration",
    level: "Beginner/Intermediate/Advanced",
    lessons: [...]
  }
}
\`\`\`

### Progress Tracking
- Progress is stored in localStorage under the key `courseProgress`
- Each lesson completion is tracked individually
- Course completion percentage is calculated dynamically
- Data persists across browser sessions

### Navigation
- Click any course card on the home page to view details
- Use the "Back to Courses" button to return to the home page
- Course ID is passed via URL parameter (`course.html?id=1`)

## Customization

### Adding New Courses
Edit `data.js` and add new course objects:
\`\`\`javascript
const coursesData = {
  // ... existing courses
  7: {
    id: 7,
    title: "Your New Course",
    description: "Course description",
    instructor: "Your Name",
    duration: "4 weeks",
    level: "Beginner",
    lessons: [
      { id: 1, title: "Lesson 1", duration: "15 min" },
      { id: 2, title: "Lesson 2", duration: "20 min" }
    ]
  }
}
\`\`\`

### Changing Colors
Edit the CSS variables in `styles.css`:
\`\`\`css
:root {
  --primary-color: #6366f1;    /* Main brand color */
  --primary-dark: #4f46e5;     /* Darker shade */
  --success-color: #10b981;    /* Success/complete color */
  --text-dark: #1f2937;        /* Dark text */
  --text-light: #6b7280;       /* Light text */
}
\`\`\`

### Modifying Layout
The platform uses flexbox for layouts. Key classes in `styles.css`:
- `.course-grid`: Controls course card layout
- `.lesson-item`: Individual lesson styling
- `.container`: Main content wrapper

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features to Add (Future Enhancements)

- User authentication and profiles
- Video/content embedding in lessons
- Quizzes and assessments
- Certificate generation
- Search and filter functionality
- Course categories
- User reviews and ratings
- Backend integration for multi-user support

## License

This is a prototype project for educational purposes. Feel free to use and modify as needed.

## Credits

Created as a mini e-learning platform prototype demonstrating HTML, CSS, and JavaScript fundamentals.
