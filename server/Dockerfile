FROM node:18

ADD https://netfree.link/dl/unix-ca.sh /home/netfree-unix-ca.sh
RUN cat /home/netfree-unix-ca.sh | sh

ENV NODE_EXTRA_CA_CERTS=/etc/ca-bundle.crt
ENV SSL_CERT_FILE=/etc/ca-bundle.crt

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
COPY .env .env

CMD ["npm", "start"]
# ENV NODE_ENV=test

# CMD ["npm", "test"]
# CMD ["npm", "run","lint"]
