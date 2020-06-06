# stage-1: build application
FROM node:lts-alpine AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn run lint && \
    yarn run build

# stage-2: copy built application to nginx image
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
