# Note Board Web (Clipboard App Frontend)

A simple, modern web frontend for a clipboard sharing app. Set and get clipboard values by ID, with a Go backend. Designed for easy deployment (including Vercel) and configurable backend host.

## Features
- Set clipboard value by ID
- Get clipboard value by ID
- Modern, responsive UI
- Backend host configurable via environment variable

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- Go (v1.18+ recommended)

### Backend Setup
Use the Go backend from [paranietharan/note-board](https://github.com/paranietharan/note-board):

1. **Clone the backend repo:**
   ```bash
   git clone https://github.com/paranietharan/note-board.git
   cd note-board
   ```
2. **Install Go (if not already):**
   - [Download Go](https://go.dev/dl/) and follow install instructions for your OS.
3. **Run the backend server:**
   ```bash
   go run main.go
   ```
   The server will start on `http://localhost:8080` by default.

> **Note:**
> - If deploying the backend, ensure it is accessible from your frontend (public URL, correct CORS headers).
> - You may need to add CORS support to your Go backend for production. See [Go CORS example](https://github.com/rs/cors) or use a simple middleware.

### Frontend Setup (This Project)
1. **Clone this repo**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **(Optional) Create a `.env` file in the project root:**
   ```env
   VITE_CLIPBOARD_API_URL=http://localhost:8080
   ```
   If not set, defaults to `http://localhost:8080`.
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

### Deploying to Vercel
1. Push your code to a GitHub/GitLab repo.
2. Import the project in [Vercel](https://vercel.com/).
3. In Vercel dashboard, go to **Settings → Environment Variables** and add:
   - `VITE_CLIPBOARD_API_URL` = `https://your-backend-url.com`
4. Deploy!

## Environment Variable
- `VITE_CLIPBOARD_API_URL`: The base URL of your clipboard backend (e.g., `https://your-backend-url.com`).

## Usage
- **Set Clipboard:** Enter an ID and value, click "Set Clipboard".
- **Get Clipboard:** Enter an ID, click "Get Clipboard".

## Example Backend (Go)
See the [paranietharan/note-board](https://github.com/paranietharan/note-board) repo for a simple clipboard backend with GET/POST endpoints.

