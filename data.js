// Course data
const coursesData = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
    icon: "💻",
    duration: "8 weeks",
    lessons: [
      { id: 1, title: "HTML Basics", duration: "45 min", completed: false },
      { id: 2, title: "CSS Fundamentals", duration: "60 min", completed: false },
      { id: 3, title: "JavaScript Essentials", duration: "90 min", completed: false },
      { id: 4, title: "Responsive Design", duration: "75 min", completed: false },
      { id: 5, title: "Building Your First Website", duration: "120 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 2,
    title: "Python Programming",
    description: "Master Python from basics to advanced concepts including data structures and algorithms.",
    icon: "🐍",
    duration: "10 weeks",
    lessons: [
      { id: 1, title: "Python Syntax & Variables", duration: "50 min", completed: false },
      { id: 2, title: "Control Flow & Loops", duration: "65 min", completed: false },
      { id: 3, title: "Functions & Modules", duration: "70 min", completed: false },
      { id: 4, title: "Object-Oriented Programming", duration: "90 min", completed: false },
      { id: 5, title: "Data Structures", duration: "85 min", completed: false },
      { id: 6, title: "File Handling", duration: "55 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    description: "Explore data analysis, visualization, and machine learning basics with Python.",
    icon: "📊",
    duration: "12 weeks",
    lessons: [
      { id: 1, title: "Introduction to Data Science", duration: "40 min", completed: false },
      { id: 2, title: "NumPy & Pandas", duration: "80 min", completed: false },
      { id: 3, title: "Data Visualization", duration: "70 min", completed: false },
      { id: 4, title: "Statistical Analysis", duration: "90 min", completed: false },
      { id: 5, title: "Machine Learning Basics", duration: "100 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    description: "Learn to create beautiful and user-friendly interfaces with modern design principles.",
    icon: "🎨",
    duration: "6 weeks",
    lessons: [
      { id: 1, title: "Design Thinking", duration: "45 min", completed: false },
      { id: 2, title: "Color Theory", duration: "50 min", completed: false },
      { id: 3, title: "Typography", duration: "55 min", completed: false },
      { id: 4, title: "Wireframing & Prototyping", duration: "75 min", completed: false },
      { id: 5, title: "User Testing", duration: "60 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build native mobile applications for iOS and Android using React Native.",
    icon: "📱",
    duration: "14 weeks",
    lessons: [
      { id: 1, title: "React Native Setup", duration: "40 min", completed: false },
      { id: 2, title: "Components & Props", duration: "65 min", completed: false },
      { id: 3, title: "Navigation", duration: "70 min", completed: false },
      { id: 4, title: "State Management", duration: "85 min", completed: false },
      { id: 5, title: "API Integration", duration: "75 min", completed: false },
      { id: 6, title: "Publishing Your App", duration: "90 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, and content strategy for online success.",
    icon: "📈",
    duration: "8 weeks",
    lessons: [
      { id: 1, title: "Marketing Fundamentals", duration: "45 min", completed: false },
      { id: 2, title: "SEO Basics", duration: "60 min", completed: false },
      { id: 3, title: "Social Media Strategy", duration: "70 min", completed: false },
      { id: 4, title: "Content Marketing", duration: "65 min", completed: false },
      { id: 5, title: "Analytics & Metrics", duration: "55 min", completed: false },
    ],
    completed: false,
  },
]

// Load courses from localStorage or use default data
function loadCourses() {
  const stored = localStorage.getItem("elearning_courses")
  if (stored) {
    return JSON.parse(stored)
  }
  return coursesData
}

// Save courses to localStorage
function saveCourses(courses) {
  localStorage.setItem("elearning_courses", JSON.stringify(courses))
}

// Get all courses
function getCourses() {
  return loadCourses()
}

// Get course by ID
function getCourseById(id) {
  const courses = loadCourses()
  return courses.find((course) => course.id === Number.parseInt(id))
}

// Update course
function updateCourse(updatedCourse) {
  const courses = loadCourses()
  const index = courses.findIndex((course) => course.id === updatedCourse.id)
  if (index !== -1) {
    courses[index] = updatedCourse
    saveCourses(courses)
  }
}
