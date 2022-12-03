FROM node:17.8.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN npm install --force

ENV NODE_OPTIONS=--max-old-space-size=8192

RUN npm run build


# Make port 3000 available to the world outside this container
EXPOSE 3000

# start app
CMD ["npm", "run", "start"]