# Authentication Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/hisabi?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email (for development, you can use a service like SendGrid, Mailgun, etc.)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@hisabi.com"
```

## Setup Steps

### 1. Database Setup
1. Install PostgreSQL locally or use a cloud service
2. Create a database named `hisabi`
3. Update the `DATABASE_URL` with your database credentials
4. Run the following commands:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

### 2. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
6. Copy Client ID and Client Secret to your `.env.local`

### 3. Email Setup (Optional)
For email authentication, you can use:
- Gmail (with App Password)
- SendGrid
- Mailgun
- Or any SMTP service

### 4. NextAuth Secret
Generate a random secret:
```bash
openssl rand -base64 32
```

## Testing Authentication

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`
3. Click "Sign In" to test authentication
4. After successful login, you'll be redirected to `/dashboard`

## Features Implemented

- ✅ Google OAuth authentication
- ✅ Email authentication
- ✅ JWT sessions
- ✅ Prisma database adapter
- ✅ Sign In/Sign Out buttons
- ✅ Dashboard redirect after login
- ✅ User menu with profile display
- ✅ Protected dashboard route
