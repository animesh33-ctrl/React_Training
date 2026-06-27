import { create } from "zustand";
import { persist } from "zustand/middleware";
import { courses as initialCourses } from "../data/courses";

export const courseStore = create(
  persist(
    (set) => ({
      courses: initialCourses,
      assignCourse: (course) =>
        set((state) => ({
          courses: state.courses.map((c) =>
            c.id === course.id ? { ...c, isAssigned: true } : c,
          ),
        })),
      removeCourse: (course) =>
        set((state) => ({
          courses: state.courses.map((c) =>
            c.id === course.id ? { ...c, isAssigned: false } : c,
          ),
        })),
    }),
    { name: "Course" },
  ),
);

export const myCourses = create(
  persist(
    (set) => ({
      coursesAssigned: [],
      addCourses: (course) =>
        set((state) => ({
          coursesAssigned: [...state.coursesAssigned, course],
        })),
      toggleProgress: (course, curr) =>
        set((state) => ({
          coursesAssigned: state.coursesAssigned.map((c) =>
            c.id === course.id ? { ...c, progress: curr } : c,
          ),
        })),
    }),
    { name: "MyCourses" },
  ),
);
