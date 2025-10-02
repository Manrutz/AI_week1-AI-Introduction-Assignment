// Get course ID from URL
function getCourseIdFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get("id")
}

// Calculate progress
function calculateProgress(lessons) {
  const completed = lessons.filter((lesson) => lesson.completed).length
  const total = lessons.length
  return {
    completed,
    total,
    percentage: Math.round((completed / total) * 100),
  }
}

// Declare getCourseById and updateCourse functions
function getCourseById(courseId) {
  // Placeholder implementation
  return {
    id: courseId,
    title: "Sample Course",
    description: "This is a sample course description.",
    duration: "2 hours",
    icon: "📚",
    completed: false,
    lessons: [
      { id: 1, title: "Lesson 1", duration: "30 minutes", completed: false },
      { id: 2, title: "Lesson 2", duration: "30 minutes", completed: false },
    ],
  }
}

function updateCourse(course) {
  // Placeholder implementation
  console.log("Course updated:", course)
}

// Toggle lesson completion
function toggleLesson(courseId, lessonId) {
  const course = getCourseById(courseId)
  const lesson = course.lessons.find((l) => l.id === lessonId)

  if (lesson) {
    lesson.completed = !lesson.completed

    // Check if all lessons are completed
    const allCompleted = course.lessons.every((l) => l.completed)
    if (allCompleted) {
      course.completed = true
    } else {
      course.completed = false
    }

    updateCourse(course)
    displayCourseDetail()
  }
}

// Complete entire course
function completeCourse(courseId) {
  const course = getCourseById(courseId)

  // Mark all lessons as completed
  course.lessons.forEach((lesson) => {
    lesson.completed = true
  })

  course.completed = true
  updateCourse(course)
  displayCourseDetail()
}

// Reset course progress
function resetCourse(courseId) {
  const course = getCourseById(courseId)

  // Mark all lessons as incomplete
  course.lessons.forEach((lesson) => {
    lesson.completed = false
  })

  course.completed = false
  updateCourse(course)
  displayCourseDetail()
}

// Display course details
function displayCourseDetail() {
  const courseId = getCourseIdFromUrl()
  const course = getCourseById(courseId)
  const courseDetail = document.getElementById("courseDetail")

  if (!course) {
    courseDetail.innerHTML = "<p>Course not found.</p>"
    return
  }

  const progress = calculateProgress(course.lessons)

  courseDetail.innerHTML = `
        <div class="course-header">
            <div class="course-icon" style="font-size: 4rem; margin-bottom: 1rem;">${course.icon}</div>
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <p style="color: #888; margin-bottom: 1rem;">⏱️ Duration: ${course.duration}</p>
            
            ${course.completed ? '<span class="completed-badge" style="font-size: 1rem; padding: 0.5rem 1rem;">✓ Course Completed!</span>' : ""}
            
            <div class="progress-section">
                <div class="progress-label">
                    <span>Course Progress</span>
                    <span>${progress.completed} / ${progress.total} lessons</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress.percentage}%"></div>
                </div>
            </div>

            <div class="action-buttons">
                ${
                  !course.completed
                    ? `
                    <button onclick="completeCourse(${course.id})" class="btn btn-success">
                        ✓ Complete Course
                    </button>
                `
                    : `
                    <button onclick="resetCourse(${course.id})" class="btn btn-secondary">
                        ↺ Reset Progress
                    </button>
                `
                }
            </div>
        </div>

        <div class="lessons-section">
            <h3>Course Lessons</h3>
            ${course.lessons
              .map(
                (lesson) => `
                <div class="lesson-item ${lesson.completed ? "completed" : ""}">
                    <div class="lesson-info">
                        <h4>${lesson.title}</h4>
                        <p>⏱️ ${lesson.duration}</p>
                    </div>
                    <div class="lesson-status">
                        <span class="status-icon">${lesson.completed ? "✅" : "⭕"}</span>
                        <button 
                            onclick="toggleLesson(${course.id}, ${lesson.id})" 
                            class="btn btn-small ${lesson.completed ? "btn-secondary" : "btn-primary"}">
                            ${lesson.completed ? "Mark Incomplete" : "Mark Complete"}
                        </button>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    `
}

// Initialize the course detail page
if (document.getElementById("courseDetail")) {
  displayCourseDetail()
}
