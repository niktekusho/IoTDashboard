# first stage: installing dependencies
FROM mhart/alpine-node:9
# install dumb-init (/usr/bin/dumb-init)
RUN apk --update add dumb-init
WORKDIR /app
# copy project declaration files and install dependencies based on them
COPY package.json yarn.lock ./
RUN yarn install

# second stage: copy dependencies from first stage (base-X does not have npm or yarn installed)
FROM mhart/alpine-node:base-9
WORKDIR /app
# copy dumb-init from first build
COPY --from=0 /usr/bin/dumb-init /usr/local/bin/dumb-init
# copy application dependencies from first build
COPY --from=0 /app .
# copy source code and other files
COPY . .

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

CMD ["node", "src/index.js"]
