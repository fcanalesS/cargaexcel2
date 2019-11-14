FROM node:12.6.0

# NODE ENVIRONMENT VARIABLES
ENV NODE_ENV = DEVELOPMENT
ENV NODE_PORT = 3000

# DATABASE ENVIRONMENT VARIABLES
ENV USER = beneficios
ENV PASSWORD = beneficiosdesa
ENV PROTOCOL = TCP
ENV HOST = bandesa.banmedica.cl
ENV PORT = 1521
ENV SID = DSUCU
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apt-get update && apt-get -y install libaio1
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD npm start


