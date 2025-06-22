# Makefile for Foodfinder Docker Compose setup

# Docker commands
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

# Git submodule commands
submodule-init:
	git submodule init
	git submodule update

submodule-update:
	git submodule update --remote --merge

submodule-add-frontend:
	git submodule add https://github.com/AMSteffensen/foodfinder-frontend code/foodfinder-frontend

submodule-remove-frontend:
	git submodule deinit -f code/foodfinder-frontend
	git rm -f code/foodfinder-frontend
	rm -rf .git/modules/code/foodfinder-frontend

# Setup command that runs everything needed
setup: submodule-init docker-build docker-up
