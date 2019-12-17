# Dev Build
FROM node:13.2-stretch as dev
WORKDIR /usr/src/app
COPY ./ ./
EXPOSE 3001
RUN npm install

# Production Build
FROM node:alpine as prod
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY ./ ./
EXPOSE 3001
RUN npm install --only=prod
CMD ["node", "src/app.js"]