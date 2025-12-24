# FROM node:20

# ADD https://netfree.link/dl/unix-ca.sh /home/netfree-unix-ca.sh
# RUN sh /home/netfree-unix-ca.sh

# ENV NODE_EXTRA_CA_CERTS=/etc/ca-bundle.crt
# ENV SSL_CERT_FILE=/etc/ca-bundle.crt

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# # COPY tsconfig.json ./
# # COPY src ./src
# COPY . .


# RUN npm run build

# CMD ["npm", "start"]


# FROM node:20

# ADD https://netfree.link/dl/unix-ca.sh /home/netfree-unix-ca.sh
# RUN sh /home/netfree-unix-ca.sh

# ENV NODE_EXTRA_CA_CERTS=/etc/ca-bundle.crt
# ENV SSL_CERT_FILE=/etc/ca-bundle.crt


# ADD https://netfree.link/dl/unix-ca.sh /home/netfree-unix-ca.sh
# RUN cat /home/netfree-unix-ca.sh | sh
# ENV NODE_EXTRA_CA_CERTS=/etc/ca-bundle.crt

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# RUN apt-get update && apt-get install -y cron

# COPY cron/update-rates.cron /etc/cron.d/update-rates
# RUN chmod 0644 /etc/cron.d/update-rates

# CMD cron -f && node dist/dollar.js