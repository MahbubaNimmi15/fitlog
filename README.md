# FitLog 🏋️‍♂️

## Workout Library & Fitness Planner


## Project Overview

FitLog is a modern dark-themed workout library and fitness planning application built with Next.js.

Users can explore different workout exercises, view detailed workout information, add exercises to today's plan, save workouts for later, and track their fitness progress with a simple and clean interface.

The application is fully responsive and works smoothly on mobile, tablet, and desktop devices.


# Technologies Used

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- REST API
- React Hot Toast
- Lucide React Icons
- Local Storage



# Key Features


## 1. Workout Library

- Displays workout exercises from API data.
- Shows workout images, categories, equipment, duration, calories, and ratings.
- Responsive workout card grid layout.
- Users can click any workout card to view details.



## 2. Dynamic Workout Details Page

- Dynamic route using Next.js App Router.
- Displays complete workout information.
- Shows:
  - Workout image
  - Equipment
  - Difficulty level
  - Sets and reps
  - Duration
  - Calories
  - Rating



## 3. Today's Workout Plan

- Users can add workouts to today's plan.
- Plan counter updates automatically.
- Maximum five workouts can be added.
- Users can mark workouts as completed.
- Users can remove workouts from the plan.



## 4. Saved Workout System

- Users can save workouts for later.
- Saved counter updates automatically.
- Saved workouts are stored locally.
- Users can remove saved workouts anytime.



## 5. Responsive Design

- Mobile-friendly layout.
- Tablet optimized interface.
- Desktop grid design.
- Responsive navigation and workout cards.



## 6. Toast Notifications

- Shows feedback messages when:
  - Adding workouts
  - Saving workouts
  - Removing workouts
  - Completing workouts



## 7. Data Persistence

- Uses Local Storage.
- Plan and saved workouts remain available after page reload.



## 8. Sorting Workout List

- Sort workouts by:
  - Duration
  - Calories
  - Rating



# Project Structure

fitlog
│
├── app
│ ├── workout
│ │ └── [id]
│ │ └── page.tsx
│ │
│ ├── my-plan
│ │ └── page.tsx
│ │
│ ├── page.tsx
│ └── layout.tsx
│
├── components
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── Library.tsx
│ ├── PlanCard.tsx
│ ├── WorkoutActions.tsx
│ └── Footer.tsx
│
├── context
│ └── PlanContext.tsx
│
└── public































