# ReactJS Plone

## Description

Simple and customizable [ReactJS](https://reactjs.org/) frontend for [Plone](https://plone.org) using its [RESTful API](https://github.com/plone/plone.restapi).


## Install

    cd ../react-plone
    npm install


## Dependencies

#### NodeJS and NPM  
    sudo apt-get install nodejs npm
    
#### Update NodeJS and NPM
    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable
    
Note: you may have to restart your console
    
    
#### Install plone.restapi
Make sure you have installed the `plone.restapi` package on your Plone site.

#### Allowing CORS

Extend your `[instance]` part in `buildout.cfg`

    zcml-additional =
       <configure xmlns="http://namespaces.zope.org/zope"
                  xmlns:plone="http://namespaces.plone.org/plone">
       <plone:CORSPolicy
         allow_origin="http://localhost:3000,http://127.0.0.1:3000"
         allow_methods="DELETE,GET,OPTIONS,PATCH,POST,PUT"
         allow_credentials="true"
         expose_headers="Content-Length,X-My-Header"
         allow_headers="Accept,Authorization,Content-Type,X-Custom-Header,Origin"
         max_age="3600"
         />
       </configure>
       
## Configure Plone RESTful API

Edit `/src/plone-api.json`

      "adress": "http://localhost",
      "port": 8080,
      "id": "Plone"

## Available Scripts

    npm start

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    npm test

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    npm run build

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
