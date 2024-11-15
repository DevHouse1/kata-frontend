FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# Copy the app files
COPY . .
RUN npm run build
EXPOSE 3000
# Run the app
CMD ["npm", "start"]