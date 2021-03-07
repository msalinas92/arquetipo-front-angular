FROM node:15.2.1-alpine AS builder
LABEL Name=frontangulararquetipo Version=0.0.1
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN $(npm bin)/ng build --prod --output-path dist

FROM nginx:1.19.4-alpine
ENV env_app=dev
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf