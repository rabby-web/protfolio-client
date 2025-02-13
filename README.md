# Next.js Portfolio & Blog Website - Client

## 🚀 Project Overview

This is the frontend client for the **Next.js Portfolio & Blog Website**. Built using **Next.js, TypeScript, and Tailwind CSS**, this project provides a dynamic and responsive portfolio and blogging platform.

## 🌟 Features

- **Home Page**: Displays portfolio introduction, skills, featured projects, and a resume download option.
- **Projects Page**: Showcases all projects with details and links.
- **Blog Page**: Lists blog posts with individual blog pages.
- **Contact Page**: Includes a form for visitors to send messages.
- **Authentication**: Secure login using **NextAuth.js** (Social login).
- **Dashboard**: Admin panel for managing projects, blogs, and messages.
- **Dark Mode**: Toggle between light and dark themes.
- **Animations**: Enhanced UI using Framer Motion.

## 🔗 Live Links

- **Live Website**: [https://rabby-protfolio.vercel.app/](https://rabby-protfolio.vercel.app/)
- **Backend API**: [https://nextjs-blog-protfolio-server.vercel.app/](https://nextjs-blog-protfolio-server.vercel.app/)
- **Client Repository**: [GitHub - Portfolio Client](https://github.com/rabby-web/protfolio-client)
- **Server Repository**: [GitHub - Portfolio Server](https://github.com/rabby-web/protfolio-blog-server)

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Authentication**: NextAuth.js (Social login)
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🔧 Setup & Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/rabby-web/protfolio-client.git
   cd protfolio-client
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env.local` file and configure environment variables:**

   ```env
   NEXT_PUBLIC_API_URL=your_backend_api_url
   NEXTAUTH_SECRET=your_next_auth_secret
   NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id
   NEXT_PUBLIC_GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Build and Deploy on Vercel:**
   ```sh
   vercel
   ```

## 🎯 Future Improvements

- Implement role-based access control.
- Add more social authentication options.
- Improve UI/UX with advanced animations.
- Enhance SEO with better metadata and SSR.


---

🚀 **Happy Coding!** 🎨✨
