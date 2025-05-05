🔗 Live Demo: https://referral-hub.example.com
# RefShare - Referral Code Sharing Platform

A modern web application for discovering and sharing referral codes across various categories.

## Overview

RefShare allows users to browse referral codes by category, view detailed information about each code including benefits and usage instructions, and share their own referral codes with the community.

## Features

- Browse referral codes by categories
- View detailed information for each referral code
- Responsive design for all device sizes
- Modern UI with Tailwind CSS and shadcn/ui components

## Tech Stack

### Frontend
- React with TypeScript
- Vite as build tool
- TanStack React Query for data fetching
- Tailwind CSS for styling
- shadcn/ui component library

### Backend
- Node.js with Express
- MySQL database

## Getting Started

### Prerequisites

- Node.js (v16+)
- MySQL (v8+)

### Database Setup

1. Start your MySQL server:
```bash
/usr/local/mysql/bin/mysql -u root -p
```

2. Create and set up the database using the provided SQL script:
```bash
/usr/local/mysql/bin/mysql -u root -p < server/setup.sql
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/refshare.git
cd refshare
```

2. Install dependencies:
```bash
npm install
```

3. Start the API server:
```bash
cd server
node index.js
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

## API Endpoints

The following API endpoints are available:

- `GET /api/test` - Test database connection
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug
- `GET /api/referral-codes` - Get all referral codes
- `GET /api/referral-codes/category/:categoryId` - Get referral codes by category ID
- `GET /api/referral-codes/:id` - Get referral code by ID

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
