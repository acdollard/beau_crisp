import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validate input
    if (!email || !password) {
      console.error("Missing email or password");
      return redirect("/login?error=missing_fields");
    }

    if (!email.includes("@")) {
      console.error("Invalid email format");
      return redirect("/login?error=invalid_email");
    }

    if (password.length < 6) {
      console.error("Password too short");
      return redirect("/login?error=password_too_short");
    }

    console.log("Attempting login for email:", email);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    
    if (error) {
      console.error("Supabase login error:", error);
      
      // Handle specific Supabase error codes
      switch (error.message) {
        case "Invalid login credentials":
          return redirect("/login?error=invalid_credentials");
        case "Email not confirmed":
          return redirect("/login?error=email_not_confirmed");
        case "Too many requests":
          return redirect("/login?error=too_many_requests");
        case "User not found":
          return redirect("/login?error=user_not_found");
        default:
          return redirect(`/login?error=${encodeURIComponent(error.message)}`);
      }
    }

    if (data.session) {
      console.log("Login successful for user:", data.user?.email);
      return redirect("/");
    }
    
    console.error("No session returned from Supabase");
    return redirect("/login?error=no_session");

  } catch (error) {
    console.error("Unexpected error during login:", error);
    return redirect("/login?error=server_error");
  }
}