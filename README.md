# How to run

## clone repo
  - git clone https://github.com/olo75jg21/vue-node-dialer.git

## Setup frontend
  - cd vue-node-dialer
  - cd front
  - npm install
 
## Setup backend
  - from front directory run:
  - cd ../backend
  - npm install
  - duplicate .env_example and change it name to .env
  - fill .env with necessary data or fill data in config/config.js
  
## Run project
  - There are two ways of running project (because we are using concurrently npm package, we can run frontend and backend server at once):
    - in backend directory run: 
      - npm run start:node
      - (we need to restart server everytime we make a change in backend directory)
      - or
      - npm run start:nodemon
      - (server automaticaly restarts everytime we save a file in backend directory)
      
Now we can open our project at http://localhost:8080
