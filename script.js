// Load and display courses on the home page
function displayCourses() {
  const courseList = document.getElementById("courseList")
  const courses = window.getCourses() // Assuming getCourses is a global function

  courseList.innerHTML = ""

  courses.forEach((course) => {
    const completedLessons = course.lessons.filter((lesson) => lesson.completed).length
    const totalLessons = course.lessons.length
    const progress = Math.round((completedLessons / totalLessons) * 100)

    const courseCard = document.createElement("a")
    courseCard.href = `course.html?id=${course.id}`
    courseCard.className = "course-card"

    courseCard.innerHTML = `
            <div class="course-icon">${course.icon}</div>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            ${course.completed ? '<span class="completed-badge">✓ Completed</span>' : ""}
            ${
              !course.completed && progress > 0
                ? `<div class="progress-section">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <p style="margin-top: 0.5rem; color: #666; font-size: 0.9rem;">${progress}% complete</p>
            </div>`
                : ""
            }
            <div class="course-meta">
                <span class="course-duration">⏱️ ${course.duration}</span>
                <span class="course-lessons">${totalLessons} lessons</span>
            </div>
        `

    courseList.appendChild(courseCard)
  })
}

// Initialize the home page
if (document.getElementById("courseList")) {
  displayCourses()
}
