# Makefile for Foodfinder Docker Compose setup

docker-up:
	docker compose up

docker-up-d:
	docker compose up -d

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

docker-build:
	docker compose build
