# 🎬 Cima — Cinema Booking System

**Cima** is a centralized digital movie booking platform for Egypt, connecting moviegoers with multiple cinemas through a seamless, personalized, and engaging experience. Browse movies, filter showtimes, select seats, and complete secure online payments — all in one place.

---

## ✨ Features

- 🎥 **Browse Movies** — Explore now-showing and upcoming movies with details, trailers, and ratings
- 🏢 **Multi-Cinema Support** — View showtimes across multiple cinema locations in Egypt
- 💺 **Seat Selection** — Interactive seat maps for choosing your perfect spot
- 🎟️ **Easy Booking** — Seamless ticket booking with QR code digital tickets
- 🤖 **AI Recommendations** — Personalized movie suggestions based on your history
- 🏆 **Loyalty Program** — Earn points after attending movies and redeem rewards
- 🔗 **Letterboxd Integration** — Sync accounts, log films, and share ratings
- 👤 **User Accounts** — Register, log in, and manage your bookings
- 📱 **Responsive Design** — Works beautifully on desktop, tablet, and mobile

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React + Vite |
| **Backend** | Node.js + Express |
| **Database** | PostgreSQL + Prisma ORM |
| **Auth** | JWT + bcrypt |
| **Styling** | Vanilla CSS (dark cinematic theme) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) (optional for now — app works with in-memory storage)

### Installation

```bash
# Clone the repository
git clone https://github.com/Ebram-11/cima.git
cd cima

# Install all dependencies
cd client && npm install
cd ../server && npm install
```

### Running Locally

```bash
# Terminal 1 — Start the backend
cd server && npm run dev

# Terminal 2 — Start the frontend
cd client && npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 🏗️ Project Structure

```
Cima/
├── client/                   # React + Vite frontend
│   ├── src/
│   │   ├── components/       # Reusable UI (Sidebar, etc.)
│   │   ├── context/          # Auth state management
│   │   ├── pages/            # Login, Register, Home
│   │   ├── services/         # API service layer
│   │   └── styles/           # Global dark theme CSS
│   └── vite.config.js        # Dev server + API proxy
│
├── server/                   # Node.js + Express backend
│   ├── prisma/               # Database schema
│   └── src/
│       ├── controllers/      # Business logic
│       ├── middleware/        # JWT auth
│       └── routes/           # API endpoints
│
├── .gitignore
├── LICENSE
└── README.md
```

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|---------|-------------|------|
| POST | `/api/auth/register` | Create account | No |
| POST | `/api/auth/login` | Sign in | No |
| GET | `/api/auth/me` | Get current user | Yes |
| GET | `/api/health` | Health check | No |

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues and submit pull requests.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ by <a href="https://github.com/Ebram-11">Ebram</a></p>
