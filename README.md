# ## Photo Albums App

#### A project that allow you to show the list of albums and the photos of each album.

#### This project use external libraries such as: @mui/material, @reduxjs/toolkit and react-paginate.

#### React javascript project which includes a structured project architecture wired with redux.

#### The project includes a material custom theme color and a persistence for the redux store to the localStorage.

#### [Demo](https://photo-albums-app.vercel.app/)


#### The project is configured for production via docker

# Build the Docker image for the current folder
# and tag it with `dockerized-react`
docker build . -t dockerized-react

# Check the image was created
docker images | grep dockerized-react

# Run the image in detached mode
# and map port 3000 inside the container with 3000 on current host
docker run -p 3000:3000 -d dockerized-react


## Production build

```
$ npm run build
```

- this will generate a build folder in the racine directory

## Development run

- clone the projet from the git repository
- under your project directory execute this command

```
$ npm install
```

this will install all the required dependencies

- run your project using the following command

```
$ npm start
```

- your project will run on http://localhost:3000/
