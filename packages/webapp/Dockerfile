#first stage: compile the web app
FROM mhart/alpine-node:9

ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT

ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}
ENV REACT_APP_API_PORT=${REACT_APP_API_PORT}

WORKDIR /app

COPY package.json yarn.lock package-lock.json ./

RUN yarn install

COPY . .

RUN yarn run build

#second stage: setup serve
FROM nginx:alpine

COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
