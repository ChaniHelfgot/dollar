FROM node:20

ADD https://netfree.link/dl/unix-ca.sh /home/netfree-unix-ca.sh
RUN sh /home/netfree-unix-ca.sh

ENV NODE_EXTRA_CA_CERTS=/etc/ca-bundle.crt
ENV SSL_CERT_FILE=/etc/ca-bundle.crt

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["npm", "start"]
