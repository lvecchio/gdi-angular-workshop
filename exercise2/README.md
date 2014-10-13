angular-workshop
================

### To run the App ###

#### Server ####

- All of the following steps assume that you have node.js installed, if not please install from their website
- Install the node modules in the server directory using `npm install`
- From the server directory, run the server using `npm start`

#### Client ####

- Install the bower packages in the client directory using `bower install`
- If you have not already installed bower, you can do this with `npm install -g bower`
- Open the index.html file in your browser

#### Client Tests ####

- `npm install -g protractor`
- `webdriver-manager update`
- `webdriver-manager start`
- In the client/test directory run `protractor conf.js`