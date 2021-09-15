FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN npm install --production
EXPOSE 3000
CMD ["node", "index.js"]