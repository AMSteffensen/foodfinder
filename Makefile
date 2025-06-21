# Makefile for Foodfinder Docker Compose setup

# Start all services with correct user permissions for mounted files
docker-up:
	MY_USER=$(id -u):$(id -g) docker compose up

docker-up-d:
	MY_USER=$(id -u):$(id -g) docker compose up -d

docker-down:
	docker compose down

docker-logs:
	docker compose logs -f

backend-shell:
	docker exec -it foodfinder-backend sh

frontend-shell:
	docker exec -it foodfinder-application sh

prune:
	docker system prune -f
