# Указываем базовый образ с Node.js
FROM node:22-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Создаем production build
RUN npm run build

# Запускаем новый этап, использующий минимальный образ
FROM node:22-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы из предыдущего этапа
COPY --from=builder /app ./

# Открываем порт для сервера
EXPOSE 3000

# Запускаем Next.js сервер
CMD ["npm", "run", "start"]
