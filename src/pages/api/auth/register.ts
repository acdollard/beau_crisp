import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const name = formData.get("name") as string;

    // Validate input
    if (!email || !password || !name) {
      console.error("Missing required fields");
      return redirect("/signup?error=missing_fields");
    }

    if (!email.includes("@")) {
      console.error("Invalid email format");
      return redirect("/signup?error=invalid_email");
    }

    if (password.length < 6) {
      console.error("Password too short");
      return redirect("/signup?error=password_too_short");
    }

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return redirect("/signup?error=password_mismatch");
    }

    if (name.trim().length < 2) {
      console.error("Name too short");
      return redirect("/signup?error=name_too_short");
    }

    console.log("Attempting registration for email:", email);

    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: {
          name: name.trim(),
        },
      },
    });

    if (error) {
      console.error("Supabase registration error:", error);
      
      // Handle specific Supabase error codes
      switch (error.message) {
        case "User already registered":
          return redirect("/signup?error=user_already_exists");
        case "Password should be at least 6 characters":
          return redirect("/signup?error=password_too_short");
        case "Invalid email":
          return redirect("/signup?error=invalid_email");
        case "Unable to validate email address: invalid format":
          return redirect("/signup?error=invalid_email");
        default:
          return redirect(`/signup?error=${encodeURIComponent(error.message)}`);
      }
    }

    if (data.user) {
      console.log("Registration successful for user:", data.user.email);
      return redirect("/signup?success=account_created");
    }

    console.error("No user data returned from Supabase");
    return redirect("/signup?error=registration_failed");

  } catch (error) {
    console.error("Unexpected error during registration:", error);
    return redirect("/signup?error=server_error");
  }
}
