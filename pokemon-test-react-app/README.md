Edquity Code Challenge
===================

This is intended to be a **3 hour code challenge** where you get as far as you can. It's okay if you don't finish, it's just meant to be an indicator of your current skillset. It's still a rather subjective test so if you take the time to make code clean, styling components, etc. it won't go against you. 

----------

Getting Started
-------------
The app is built with a decoupled API (the app and API are completely separate). You'll need access to both the React app and the Node API. If you haven't received access to both of these, start there.

Provided you do have access, you should set up your environment first before starting the test. 

> **Steps:**

> - **Clone** the repositories to your local machine.
> - **Check Versions** Make sure you're using Node v8 and anything above NPM v5 (I recommend using NVM to manage your node versions if you need to switch, on a Mac, go here: http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/)
> - **Install dependencies** Install your dependencies with NPM by going into each repository (App, and API) and run `npm install`.
> - **Get it running** When you're ready to start the test, run `npm start` in both repositories and you should be good to go. Time should start when you have the environment set up.
> - **API Documentation** Documentation lives here <https://pokemoncodingtest.docs.apiary.io> and should be referenced for instructions when working with the API.

Tasks
-------------
Try to do these in order but if you get stuck on something for too long you can move on but make note of why it was skipped.

###Working with data from the API
1. Add data to Pokemon card. Make the HP, Attack, and Defense dynamic using props from information available on the Pokemon.
2. Make the "Release into the wild" button work. Should use the `DELETE` method on the `/collection/:pokemonId` endpoint. 

###Autocomplete
1. Turn the `SearchBar` component into a controlled input.
2. Using the backend, fetch search results based on user input.
3. Display results in an autocomplete format. Material UI has a component for this that you can use <http://www.material-ui.com/#/components/auto-complete> or you can implement it any way you see fit.

###Building new components
1. Create a new component for battling a Pokemon you select. The pokemon they will be battling will be chosen randomly on the server with the `/pokedex/random` endpoint.
2. Determine the winner of the battle by the `total` property on each Pokemon object and label a winner and a loser.
3. When the battle is deemed complete you can close the modal using the `handleEndBattle` method.

###Bonus
1. If any time is remaining, add some flair or make it look good or add anything you'd like (sound effects, animations, more complex battles, etc.)