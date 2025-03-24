import { defineMiddleware } from "astro:middleware";

// Add routes that require authentication
const protectedRoutes = [
  "/workouts",
  "/workouts/new",
  "/profile",
];

// Add routes that require specific roles
const coachRoutes = [
  "/workouts/new",
];

export const onRequest = defineMiddleware(async (context, next) => {
  return next();
}); 