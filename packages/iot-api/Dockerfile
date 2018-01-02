FROM mhart/alpine-node:9

WORKDIR /app

COPY package.json package-lock.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
