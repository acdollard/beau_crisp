# Supabase Authentication Setup

This guide will help you set up Supabase authentication for your Astro project.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Wait for the project to be set up

## 2. Get Your Project Credentials

1. Go to your project dashboard
2. Navigate to Settings > API
3. Copy your Project URL and anon/public key

## 3. Set Up Environment Variables

Create a `.env` file in your `frontEnd` directory with the following variables:

```env
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace `your_supabase_project_url` and `your_supabase_anon_key` with your actual Supabase credentials.

## 4. Configure Authentication Settings

In your Supabase dashboard:

1. Go to Authentication > Settings
2. Configure your site URL (e.g., `http://localhost:4321` for development)
3. Add redirect URLs for your authentication flows
4. Configure email templates if needed

## 5. Set Up Database Tables (Optional)

If you want to store additional user data, create a `profiles` table:

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## 6. Available Pages and Components

### Pages:
- `/login` - Login page
- `/signup` - Sign up page
- `/profile` - Protected profile page

### Components:
- `LoginForm.astro` - Login form component
- `SignupForm.astro` - Sign up form component
- `AuthProvider.astro` - Authentication state management
- `ProtectedRoute.astro` - Route protection component
- `UserProfile.astro` - User profile display

## 7. Usage Examples

### Protecting a Route:
```astro
---
import ProtectedRoute from "../components/ProtectedRoute.astro";
---

<ProtectedRoute>
  <h1>This content is only visible to authenticated users</h1>
</ProtectedRoute>
```

### Checking Authentication Status:
```javascript
// In any script tag
if (window.authState?.isAuthenticated) {
  console.log('User is logged in:', window.authState.user)
} else {
  console.log('User is not logged in')
}
```

### Signing Out:
```javascript
// In any script tag
await window.authState?.signOut()
```

## 8. Customization

You can customize the authentication flow by:

1. Modifying the form components to match your design
2. Adding additional user metadata during signup
3. Implementing password reset functionality
4. Adding social authentication providers
5. Creating custom email templates

## 9. Security Considerations

- Always use environment variables for sensitive data
- Enable Row Level Security (RLS) on your database tables
- Validate user input on both client and server side
- Use HTTPS in production
- Regularly update dependencies

## 10. Troubleshooting

### Common Issues:

1. **Environment variables not loading**: Make sure your `.env` file is in the correct location and variables start with `PUBLIC_`
2. **CORS errors**: Configure your Supabase project's allowed origins
3. **Authentication not working**: Check your Supabase project settings and environment variables
4. **Redirect issues**: Verify your redirect URLs in Supabase settings

For more help, check the [Supabase documentation](https://supabase.com/docs).



