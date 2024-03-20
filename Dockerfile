# dockerfile used for production. no further configuration is needed

FROM node:20.9.0-slim

RUN apt-get update -y && apt-get install -y openssl

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json yarn.loc[k] ./

ENV NODE_ENV=production

RUN yarn install 

COPY . .

RUN yarn generate --generator client

COPY --chown=node:node . .

USER node

EXPOSE 3001

# differs from yarn dev because it builds and runs migrations
CMD [ "yarn", "prod" ]

# para a documentação seguida para construção desse arquivo, vá para o step 3 do link:
# https://www.digitalocean.com/community/tutorials/como-construir-uma-aplicacao-node-js-com-o-docker-pt
