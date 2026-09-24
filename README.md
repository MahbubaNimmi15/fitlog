# FitLog 🏋️‍♂️

# FitLog - Workout Library

## Project Overview

FitLog is a modern dark-themed workout library and fitness planning application built with Next.js.

Users can explore different workout exercises, view detailed workout information, add exercises to today's plan, save workouts for later, and track their fitness progress with a simple and clean interface.

The application is fully responsive and works smoothly on mobile, tablet, and desktop devices.

---

## Live Website

https://fitlog-ten-ruddy.vercel.app/

---

## GitHub Repository

https://github.com/MahbubaNimmi15/fitlog

---

# Technologies Used

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- REST API
- React Hot Toast
- Lucide React Icons
- Local Storage

---

# Key Features

## 1. Workout Library

- Displays workout exercises from API data.
- Shows workout images, categories, equipment, duration, calories, and ratings.
- Responsive workout card grid layout.
- Users can click any workout card to view detailed information.

---

## 2. Dynamic Workout Details Page

- Dynamic route using Next.js App Router.
- Displays complete workout information.

Includes:

- Workout image
- Description
- Equipment
- Difficulty level
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step workout instructions

---

## 3. Today's Workout Plan

- Users can add workouts to today's plan.
- Plan counter updates automatically.
- Maximum five workouts can be added.
- Users can mark workouts as completed.
- Users can remove workouts from the plan.
- View Details button allows users to open workout details.

---

## 4. Saved Workout System

- Users can save workouts for later.
- Saved counter updates automatically.
- Saved workouts are stored locally.
- Users can remove saved workouts anytime.

---

## 5. Responsive Design

- Fully responsive design.
- Optimized for:
  - Mobile devices
  - Tablets
  - Desktop screens

- Responsive navigation.
- Responsive workout cards and layouts.

---

## 6. Toast Notifications

The application provides feedback messages for:

- Adding workouts to today's plan.
- Saving workouts.
- Removing workouts.
- Completing workouts.
- Duplicate workout attempts.

---

## 7. Data Persistence

- Uses Local Storage.
- Today's plan and saved workouts remain available after page reload.
- User workout progress is maintained locally.

---

## 8. Workout Instructions

- Workout details page includes step-by-step instructions.
- Helps users understand proper exercise techniques before starting workouts.

---

# API Used

## All Workouts API
https://api.abcz.workers.dev/api/fitlog

## Single Workout API
https://api.abcz.workers.dev/api/fitlog/:id

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

# Installation and Setup

Clone the repository:

bash
git clone https://github.com/MahbubaNimmi15/fitlog.git

# Go to project folder:
cd fitlog

# Install dependencies:
npm install

# Run development server:
npm run dev

# Open in browser:
http://localhost:3000

# Build for production:
npm run build




