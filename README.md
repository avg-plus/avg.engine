A powerful & lightweight AVG data engine without rendering. 

**In Development**
- In this development phase, many features are far from perfect.
- A game client renderering implementation that depend on `avg.engine` is planning to open source.

## About AVGEgine
`AVG Engine` open source project that aims to provide a powerful and cross platform game data engine to work with your custom game client implementation.

## Getting started
Install dependencies:

``` bash
$ git clone https://github.com/AngryPowman/avg.engine
$ cd avg.engine
$ npm install
```

We recommended use `yarn` for dependency management.

Run test:
``` bash
$ npm run test
```

The following output as your will see:
```
play sound: assets/music.mp3
show text: { text: 'Hello World' }
show text: { text: 'I am saying something.' }
```

It means you are running some AVG (game process) events in a text-only mode before you have a renderering implementation.

## AVG Script
`AVGScript` is a lightweight JavaScript-Like script based on JavaScript. You can easily write some code to control your game flow and logic.

Here is a code snippet in `test/start.avs` shows you about it:
``` JavaScript
let dialogue = 'Hello World';
let willSay = true;

api.playSound('assets/music.mp3');
api.text({ text: dialogue });

if (willSay) {
    api.text({ text: 'I am saying something.' });
}

```

## Examples
If you would like to create your own game, you should just doing less work in `test/app.ts`:

``` TypeScript
import * as avg from "../engine";

let game = new avg.AVGGame();
game.start('./dist/test/start.avs');

```
