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
git clone <your-repo-url>
cd foodfinder
```

2. Start the application using Docker
```bash
make docker-build
make docker-up
```

3. Access the application
- Frontend: http://localhost:3000
- GraphQL Playground: http://localhost:3000/api/graphql

## Development

- `make docker-up`: Start all services
- `make docker-down`: Stop all services
- `make docker-build`: Rebuild containers
- `make docker-logs`: View logs
