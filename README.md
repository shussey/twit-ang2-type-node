# sjh-eg-add-ang2

This is a learning project that starts with a Node express project with jade and adds angular2 to it.

The tricky part is that there are node services running in the server portion of this project that the angular part running in the browser has to call and consume.

The basis for this project is `https://github.com/bolducp/Express_Angular2_Twitter_App` although I found quite a lot of changes and tweaks were required for me to get it working



## View the application

Deployed here: TBD

## Download and prepare for local use

1. Clone the repo

2. Cd to the root of the project and run `npm install`

3. Cd to the client subfolder and run `npm install`

4. Get developer API keys from Twitter

5. Fillout the `.env.template` and copy it to `.env`. It should include the following keys:
```javascript
TWITTER_CONSUMER_KEY=your_key_here
TWITTER_CONSUMER_SECRET=your_key_here
TWITTER_ACCESS_TOKEN_KEY=your_key_here
TWITTER_ACCESS_TOKEN_SECRET=your_key_here
```
## To run the project as-is

1. Cd to the client subdirectory an run `tsc` to compile all the Typescript files to JavaScript

2. Cd to the root of the project and run `npm start`

## To develop the project

1. Start two terminal windows

2. In the first, assuming you have nodemon installed, run `nodemon` to start the whole applicaiton on `http://localhost:3000`

3. In the second run `npm start` 
    * This will perform monitoring and auto compilation of your Typescript files.
    * It also starts a webserver for just the client subfolder of the project on `http://localhost:3001` and launches a dynamically refreshing browser session.
    * Although useful to see if changes to the client app are letting it compile successfully, this browser session does not have access to the node server services so it will not function completely.

4. Navigate to `http://localhost:3000` in a second browser window or tab. 
    * This is the complete application.