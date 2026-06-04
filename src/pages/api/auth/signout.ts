import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ redirect }) => {
  try {
    console.log("Attempting to sign out user");

    // First check if user is actually logged in
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      console.log("No active session found, redirecting to home");
      return redirect("/");
    }

    console.log("Signing out user:", session.user?.email);

    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error("Supabase logout error:", error);
      
      // Handle specific logout errors
      switch (error.message) {
        case "Invalid JWT":
          console.log("Invalid JWT, clearing session anyway");
          return redirect("/");
        case "User not found":
          console.log("User not found, clearing session anyway");
          return redirect("/");
        default:
          console.error("Unexpected logout error:", error.message);
          return redirect("/?error=logout_failed");
      }
    }

    console.log("Logout successful for user:", session.user?.email);
    return redirect("/");

  } catch (error) {
    console.error("Unexpected error during logout:", error);
    // Even if there's an error, try to redirect to home
    return redirect("/?error=logout_failed");
  }
}
