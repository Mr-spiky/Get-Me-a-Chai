# ☕ Get Me A Chai

A modern crowdfunding platform for creators to receive support from their fans. Built with Next.js, MongoDB, and Razorpay payment integration.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)

## 🌟 Features

- **Creator Profiles** - Personalized pages with cover images, profile pictures, and bio
- **Secure Payments** - Integrated Razorpay payment gateway for seamless transactions
- **OAuth Authentication** - Sign in with GitHub or Google using NextAuth.js
- **Dashboard** - Creators can manage their profile, view supporters, and track earnings
- **Responsive Design** - Beautiful UI that works on all devices
- **Real-time Updates** - See supporters and payment history instantly

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js (GitHub & Google OAuth)
- **Payments**: Razorpay
- **Styling**: Tailwind CSS
- **Notifications**: React Toastify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mr-spiky/Get-Me-a-Chai-.git
   cd Get-Me-a-Chai-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret

   # GitHub OAuth
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret

   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # Razorpay
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret

   # App URL
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add all environment variables in Vercel's project settings
4. Update `NEXTAUTH_URL` and `NEXT_PUBLIC_URL` to your production domain
5. Deploy!

### Important Notes for Production:
- Update OAuth callback URLs in GitHub/Google developer console
- Use production Razorpay keys
- Ensure MongoDB Atlas allows connections from Vercel IPs

## 📁 Project Structure

```
├── actions/          # Server actions for database operations
├── app/
│   ├── [username]/   # Dynamic creator profile pages
│   ├── about/        # About page
│   ├── api/          # API routes (auth, razorpay)
│   ├── dashboard/    # Creator dashboard
│   ├── login/        # Authentication page
│   └── page.js       # Homepage
├── component/        # Reusable React components
├── db/               # Database connection
├── models/           # Mongoose schemas
├── public/           # Static assets
└── scripts/          # Utility scripts
```

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `NEXTAUTH_URL` | Your app's base URL |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js sessions |
| `GITHUB_ID` | GitHub OAuth App Client ID |
| `GITHUB_SECRET` | GitHub OAuth App Client Secret |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |
| `RAZORPAY_KEY_ID` | Razorpay API Key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay API Key Secret |
| `NEXT_PUBLIC_URL` | Public URL for client-side |

## 📸 Screenshots

### Creator Profile Page
- Beautiful cover image with gradient overlay
- Profile picture with glow effect
- Real-time supporter count and amount raised
- Elegant payment form with quick amount selection

### Dashboard
- Edit profile information
- View all supporters and their messages
- Track total earnings

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shivam** - [@Mr-spiky](https://github.com/Mr-spiky)

---

⭐ If you found this project helpful, please give it a star!
