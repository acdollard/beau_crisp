import { defineMiddleware } from "astro:middleware";
import { supabase } from "./lib/supabase";

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
  const { pathname } = context.url;
  
  // Check if the current route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  if (isProtectedRoute) {
    // Get session server-side
    const {
      data: { session },
    } = await supabase.auth.getSession();
    
    if (!session) {
      // Redirect to login if not authenticated
      return context.redirect("/login?error=not_authenticated");
    }
  }
  
  return next();
}); 