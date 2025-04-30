# Сборка проекта
```commandline
docker compose up -d --build
```
# Пушим все на docker hub
```commandline
docker login -u khdev
docker push khdev/front-micros
docker push khdev/back-micros
```
