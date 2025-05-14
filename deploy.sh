#!/bin/bash

# Сборка проекта
npm run build

# Создание временной директории для деплоя
rm -rf .deploy
mkdir .deploy

# Копирование собранных файлов
cp -r dist/* .deploy/
cp -r dist/.* .deploy/ 2>/dev/null || :

# Переход в директорию деплоя
cd .deploy

# Инициализация git
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Пуш на ветку gh-pages
# Замените URL на ваш репозиторий
git push -f git@github.com:vekesserop/site-nova.git main:gh-pages

# Возврат в корневую директорию
cd ..

# Удаление временной директории
rm -rf .deploy

echo "Деплой завершен!"
