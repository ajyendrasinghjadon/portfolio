# Unified Vercel Deployment Guide

This project is now optimized for a **Unified Vercel Deployment** using Serverless Functions. This means your frontend and backend are deployed together in a single dashboard, with **zero CORS configuration** needed.

## 1. Prerequisites
- A **Vercel** account.
- A **SendGrid** account with an API Key and a Verified Sender email.

## 2. Environment Variables
You only need one set of environment variables in Vercel. Set these in your Vercel Project Dashboard:

```bash
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_verified_sender_email
RECEIVER_EMAIL=your_email_to_receive_messages
```

## 3. Deployment Steps

### Step 1: Push to GitHub
If you haven't already, push your code to a GitHub repository.

### Step 2: Import to Vercel
1. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** > **"Project"**.
2. Import your GitHub repository.

### Step 3: Configure Build Settings
Vercel should automatically detect the project, but ensure these settings are correct:
- **Framework Preset**: Vite (if not detected, select 'Other').
- **Root Directory**: `./` (The project root).
- **Build Command**: `npm run build --prefix client`
- **Output Directory**: `client/dist`
- **Install Command**: `npm install` (Vercel will install dependencies from both the root and subdirectories if needed, but our `api` dependencies are at the root).

### Step 4: Add Environment Variables
1. Expand the **Environment Variables** section.
2. Add `SENDGRID_API_KEY`, `FROM_EMAIL`, and `RECEIVER_EMAIL`.

### Step 5: Deploy!
Click **"Deploy"**. Vercel will build your React app and automatically turn the `api/contact.js` file into a powerful serverless function.

## 4. Local Development
To test the full stack locally:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel dev` in the root directory.
3. Your app will be available at `http://localhost:3000`, and the API will be at `http://localhost:3000/api/contact`.

## 5. Troubleshooting
- **API Errors**: Check the "Functions" tab in your Vercel deployment dashboard for backend logs.
- **Build Errors**: Ensure your Node.js version in Vercel matches your local environment (Node 18+ recommended).
