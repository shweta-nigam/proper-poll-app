# Proper Poll App

A full-stack real-time polling platform built with modern web technologies. Users can create polls, collect responses, analyze results, and authenticate securely using email/password or Google OAuth.


---

# Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
- [Backend](#backend)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Architecture](#api-architecture)
- [Authentication Flow](#authentication-flow)
- [Real-Time Features](#real-time-features)
- [Validation & Error Handling](#validation--error-handling)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [License](#license)

---

# Overview

Proper Poll App is a modern polling and survey platform that allows users to:

- Create custom polls
- Share polls with users
- Collect responses
- View analytics dashboards
- Authenticate using JWT and Google OAuth
- Experience real-time interactions using Socket.IO

The project follows a modular architecture with separate frontend and backend applications.

---

# Features

## Authentication

- User registration
- User login
- Google OAuth login
- JWT-based authentication
- Protected routes
- Password hashing using bcrypt

## Poll Management

- Create polls
- View all polls
- Submit responses
- Poll analytics dashboard
- Dynamic question and option handling

## Analytics

- Poll response visualization
- Charts using Recharts
- Interactive analytics dashboard

## Real-Time Functionality

- Socket.IO integration
- Live updates support
- Real-time poll interactions

## UI/UX

- Responsive design
- Smooth animations using Framer Motion
- Modern UI using Tailwind CSS
- Clean component-based architecture

---

# Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI Library |
| TypeScript | Type Safety |
| Vite | Frontend Build Tool |
| Tailwind CSS v4 | Styling |
| React Router DOM v7 | Routing |
| Axios | API Requests |
| Framer Motion | Animations |
| Recharts | Analytics Charts |
| React OAuth Google | Google Authentication |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express 5 | Backend Framework |
| TypeScript | Type Safety |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Zod | Validation |
| Nodemailer | Email Services |
| Socket.IO | Real-Time Communication |

---

# Project Structure

```bash
proper-poll-app/
│
├── backend/
│   ├── src/
│   │   ├── common/
│   │   │   ├── config/
│   │   │   ├── middleware/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   │
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   ├── poll/
│   │   │   ├── response/
│   │   │   ├── feedback/
│   │   │   ├── payment/
│   │   │   └── subscription/
│   │   │
│   │   ├── app.ts
│   │   ├── server.ts
│   │   └── socket.ts
│   │
│   └── dist/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── assets/
│   │
│   └── public/
│
└── README.md
```

Project structure source: :contentReference[oaicite:1]{index=1}

---

# Frontend

## Frontend Tech Stack

Frontend dependencies include:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM v7
- Axios
- Framer Motion
- Recharts

Frontend package configuration reference: :contentReference[oaicite:2]{index=2}

---

## Frontend Folder Structure

```bash
frontend/src/
│
├── api/
│   ├── auth.api.ts
│   ├── poll.api.ts
│   └── response.api.ts
│
├── components/
│   ├── home/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── FeatureCard.tsx
│
├── pages/
│   ├── auth/
│   └── polls/
│
├── routes/
│   └── AppRoutes.tsx
│
└── assets/
```

---

## Frontend Installation

```bash
cd frontend
npm install
```

Or using pnpm:

```bash
pnpm install
```

---

## Frontend Development Server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Frontend Build

```bash
npm run build
```

---

## Frontend Preview

```bash
npm run preview
```

---

# Backend

## Backend Tech Stack

Backend dependencies include:

- Express 5
- MongoDB
- Mongoose
- JWT Authentication
- Zod Validation
- Socket.IO
- Nodemailer

Backend package configuration reference: :contentReference[oaicite:3]{index=3}

---

## Backend Folder Structure

```bash
backend/src/
│
├── common/
│   ├── config/
│   ├── middleware/
│   ├── types/
│   └── utils/
│
├── modules/
│   ├── auth/
│   ├── poll/
│   ├── response/
│   ├── feedback/
│   ├── payment/
│   └── subscription/
│
├── app.ts
├── server.ts
└── socket.ts
```

---

## Backend Installation

```bash
cd backend
npm install
```

Or using pnpm:

```bash
pnpm install
```

---

## Backend Development Server

```bash
npm run dev
```

This command uses `tsc-watch` to automatically rebuild and restart the server on file changes.

---

## Backend Production Build

```bash
npm run build
```

---

## Backend Production Start

```bash
npm run start
```

---

# Environment Variables

## Backend `.env`

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

GOOGLE_CLIENT_ID=your_google_client_id

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

---

## Frontend `.env`

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

---

# Running the Project

## Step 1 — Start Backend

```bash
cd backend
npm run dev
```

---

## Step 2 — Start Frontend

```bash
cd frontend
npm run dev
```

---

## Step 3 — Open Browser

```bash
http://localhost:5173
```

---

# API Architecture

The backend follows a modular architecture.

## Auth Module

Handles:

- Registration
- Login
- Google OAuth
- JWT generation
- Authentication middleware

Relevant files:

```bash
modules/auth/
```

---

## Poll Module

Handles:

- Poll creation
- Poll retrieval
- Poll management

Relevant files:

```bash
modules/poll/
```

---

## Response Module

Handles:

- Poll responses
- Response storage
- Response analytics

Relevant files:

```bash
modules/response/
```

---

# Authentication Flow

## Email/Password Authentication

1. User registers
2. Password gets hashed using bcrypt
3. JWT token is generated
4. Token is sent to frontend
5. Protected routes verify JWT

---

## Google OAuth Authentication

1. User selects Google login
2. Google returns credential token
3. Backend verifies token using Google Auth Library
4. JWT is generated
5. User session is authenticated

---

# Real-Time Features

Socket.IO is integrated for:

- Live poll updates
- Real-time interactions
- Instant response handling

Socket setup files:

```bash
backend/src/socket.ts
backend/dist/socket.js
```

---

# Validation & Error Handling

## Validation

The project uses Zod for request validation.

Validation files:

```bash
poll.validation.ts
response.validation.ts
auth.validator.ts
```

---

## Error Handling

Custom utilities include:

```bash
api-error.ts
api-response.ts
```

These utilities provide:

- Standardized API responses
- Consistent error handling
- Cleaner controller logic

---

# Available Scripts

## Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build frontend |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Backend

| Command | Description |
|---|---|
| `npm run dev` | Start development server with watch mode |
| `npm run build` | Compile TypeScript |
| `npm run start` | Start production server |

---

# Deployment

## Frontend Deployment

Recommended platforms:

- :contentReference[oaicite:4]{index=4}
- :contentReference[oaicite:5]{index=5}

## Backend Deployment

Recommended platforms:

- :contentReference[oaicite:6]{index=6}
- :contentReference[oaicite:7]{index=7}
- :contentReference[oaicite:8]{index=8}

## Database Hosting

Recommended providers:

- :contentReference[oaicite:9]{index=9} Atlas
- :contentReference[oaicite:10]{index=10}

---

# Future Improvements

Potential future enhancements:

- Role-based access control
- Poll sharing system
- Poll expiration
- Anonymous voting
- Team collaboration
- Advanced analytics
- AI-generated poll suggestions
- Email notifications
- Payment integration
- Subscription system

---

# License

This project is licensed under the MIT License.

---

# Author

Developed as a modern full-stack polling platform using React, TypeScript, Express, MongoDB, and Socket.IO.