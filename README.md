# Food Finder

A full-stack application for discovering and managing restaurant locations, built with Next.js, GraphQL, MongoDB, and Docker.

## Features
- Browse restaurant locations
- User authentication
- Personal wishlists
- GraphQL API
- Docker containerization

## Tech Stack
- Frontend: Next.js, TypeScript, GraphQL
- Backend: MongoDB, Apollo Server
- Testing: Jest
- Infrastructure: Docker

## Setup

1. Clone the repository
```bash
git clone https://github.com/AMSteffensen/foodfinder
```

2. Configure environment variables
```bash
cd code/foodfinder-application
cp .env.example .env.local
```
Then edit `.env.local` with your settings:
- Get GitHub OAuth credentials from https://github.com/settings/developers
- Generate a secure NEXTAUTH_SECRET using `openssl rand -base64 32`

3. Start the application using Docker
```bash
cd ../..  # Back to root
make docker-build
make docker-up
```

4. Access the application
- Frontend: http://localhost:3000
- GraphQL Playground: http://localhost:3000/api/graphql

## Security Notes

1. Environment Variables
- Never commit `.env.local` or any other `.env*` files except `.env.example`
- Always use strong, unique secrets in production
- Regenerate `NEXTAUTH_SECRET` for each deployment

2. Development Setup
- MongoDB port (27017) is exposed to host for development
- In production, use proper network security groups and firewall rules
- Consider using MongoDB Atlas or similar for production deployments

3. Authentication
- Application uses GitHub OAuth for secure authentication
- JWT tokens are handled securely through NextAuth.js
- Protected routes and mutations require authentication

## Development

- `make docker-up`: Start all services
- `make docker-down`: Stop all services
- `make docker-build`: Rebuild containers
- `make docker-logs`: View logs
