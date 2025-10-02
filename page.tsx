"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, CheckCircle2, ArrowLeft } from "lucide-react"

// Course data structure
const coursesData = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript",
    duration: "8 hours",
    lessons: [
      { id: 1, title: "HTML Basics", duration: "45 min", completed: false },
      { id: 2, title: "CSS Fundamentals", duration: "60 min", completed: false },
      { id: 3, title: "JavaScript Essentials", duration: "90 min", completed: false },
      { id: 4, title: "Building Your First Website", duration: "120 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 2,
    title: "React for Beginners",
    description: "Master the basics of React and build interactive UIs",
    duration: "10 hours",
    lessons: [
      { id: 1, title: "React Components", duration: "50 min", completed: false },
      { id: 2, title: "State and Props", duration: "70 min", completed: false },
      { id: 3, title: "Hooks Deep Dive", duration: "80 min", completed: false },
      { id: 4, title: "Building a Todo App", duration: "100 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 3,
    title: "Advanced CSS Techniques",
    description: "Explore modern CSS features like Grid, Flexbox, and animations",
    duration: "6 hours",
    lessons: [
      { id: 1, title: "CSS Grid Layout", duration: "60 min", completed: false },
      { id: 2, title: "Flexbox Mastery", duration: "50 min", completed: false },
      { id: 3, title: "CSS Animations", duration: "70 min", completed: false },
      { id: 4, title: "Responsive Design", duration: "80 min", completed: false },
    ],
    completed: false,
  },
  {
    id: 4,
    title: "TypeScript Fundamentals",
    description: "Add type safety to your JavaScript projects",
    duration: "7 hours",
    lessons: [
      { id: 1, title: "TypeScript Basics", duration: "55 min", completed: false },
      { id: 2, title: "Interfaces and Types", duration: "65 min", completed: false },
      { id: 3, title: "Generics", duration: "75 min", completed: false },
      { id: 4, title: "Advanced Types", duration: "85 min", completed: false },
    ],
    completed: false,
  },
]

export default function ELearningPlatform() {
  const [courses, setCourses] = useState(coursesData)
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  const calculateProgress = (lessons: (typeof coursesData)[0]["lessons"]) => {
    const completedLessons = lessons.filter((lesson) => lesson.completed).length
    return (completedLessons / lessons.length) * 100
  }

  const toggleLessonComplete = (courseId: number, lessonId: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              lessons: course.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson,
              ),
            }
          : course,
      ),
    )
  }

  const markCourseComplete = (courseId: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              completed: true,
              lessons: course.lessons.map((lesson) => ({ ...lesson, completed: true })),
            }
          : course,
      ),
    )
  }

  const currentCourse = courses.find((course) => course.id === selectedCourse)

  if (selectedCourse && currentCourse) {
    const progress = calculateProgress(currentCourse.lessons)

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button variant="ghost" onClick={() => setSelectedCourse(null)} className="mb-6 hover:bg-accent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">{currentCourse.title}</CardTitle>
                  <CardDescription className="text-base">{currentCourse.description}</CardDescription>
                </div>
                {currentCourse.completed && (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Completed
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {currentCourse.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {currentCourse.lessons.length} lessons
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Course Progress</span>
                  <span className="font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => markCourseComplete(currentCourse.id)}
                disabled={currentCourse.completed}
                className="w-full hover:scale-[1.02] transition-transform"
              >
                {currentCourse.completed ? "Course Completed" : "Mark Course as Complete"}
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Lessons</h2>
            {currentCourse.lessons.map((lesson, index) => (
              <Card
                key={lesson.id}
                className={`transition-all hover:shadow-md ${lesson.completed ? "bg-accent/50" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                          lesson.completed ? "bg-green-600 text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {lesson.completed ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                      </div>
                    </div>
                    <Button
                      variant={lesson.completed ? "outline" : "default"}
                      onClick={() => toggleLessonComplete(currentCourse.id, lesson.id)}
                      className="hover:scale-105 transition-transform"
                    >
                      {lesson.completed ? "Mark Incomplete" : "Complete Lesson"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-balance">Welcome to LearnHub</h1>
          <p className="text-muted-foreground text-lg">Explore our courses and start your learning journey today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const progress = calculateProgress(course.lessons)

            return (
              <Card
                key={course.id}
                className="flex flex-col hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedCourse(course.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-balance">{course.title}</CardTitle>
                    {course.completed && (
                      <Badge className="bg-green-600 hover:bg-green-700 shrink-0">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Done
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-pretty">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons.length} lessons
                    </div>
                  </div>
                  {progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full hover:bg-primary/90 transition-colors">
                    {progress > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
