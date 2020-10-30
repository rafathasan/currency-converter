FROM node:14.12.0

WORKDIR /currency-converter

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4200

EXPOSE 4200

CMD ["npm","start"]

