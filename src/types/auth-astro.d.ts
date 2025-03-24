declare module "auth-astro/server" {
  export interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      role?: string;
    };
    expires: string;
  }

  export function getSession(req: Request): Promise<Session | null>;
}

declare module "auth-astro/client" {
  export interface SignInOptions {
    email: string;
    password: string;
    redirect?: boolean;
    callbackUrl?: string;
  }

  export interface SignInResult {
    error?: string;
    status?: number;
    ok?: boolean;
    url?: string;
  }

  export function signIn(
    provider: "credentials",
    options: SignInOptions
  ): Promise<SignInResult | undefined>;
  
  export function signOut(options?: { redirect?: boolean; callbackUrl?: string }): Promise<void>;
} 