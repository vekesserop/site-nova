# Nova AI Accelerate

Лендинг для продукта Nova AI - специализированной платформы для ML/AI задач на базе Kubernetes.

**Демо**: https://vekesserop.github.io/site-nova/

## Технологии

Проект разработан с использованием:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev

# Сборка для продакшена
npm run build

# Деплой на GitHub Pages
npm run deploy
```

## Деплой на GitHub Pages

Проект настроен для деплоя на GitHub Pages. Для деплоя есть два способа:

### Способ 1: Использование npm скрипта

```bash
npm run deploy
```

Эта команда соберет проект и опубликует его на ветке `gh-pages` вашего репозитория. Необходимо настроить аутентификацию GitHub с помощью SSH или токена доступа.

### Способ 2: Использование скрипта deploy.sh

```bash
./deploy.sh
```

Этот скрипт соберет проект и опубликует его на ветке `gh-pages` вашего репозитория. Требуется настроенный SSH-ключ для GitHub.
