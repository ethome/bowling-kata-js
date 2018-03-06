Bowling Game Kata
=================
> The goal of this lesson is to practice test-driven development by implementing an algorithm for the game of bowling.

[bowling-score]: http://www.wpclipart.com/recreation/sports/bowling/bowling_scoresheet_example.png "bowling score card"


## Scoring bowling

![Bowling scoreboard][bowling-score]

The game consists of 10 frames as shown above.  In each frame the player has
two opportunities to knock down 10 pins.  The score for the frame is the total
number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries.  The bonus for
that frame is the number of pins knocked down by the next roll.  So in frame 3
above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try.  The bonus
for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
balls to complete the frame.  However no more than three balls can be rolled in
tenth frame.


## The requirements

* Write class "BowlingGame" that has two methods
	- *roll(pins)*
		- called each time the player rolls a ball. The argument is the number of pins knocked down.
	- *score()*
		- called only after the very end of the game. Returns total score of the game.


## Notes

* One game
* A game has 10 frames
* A frame has one or two rolls
* The tenth frame has two or three rolls. It's different from all the other frames
* The score function must iterate through all the frames, and calculate the total score
* The score for a spare or a strike depends on the following two rolls


## Setup

* Install [nvm](https://github.com/creationix/nvm/blob/master/README.md#install-script) or
[nvm-windows](https://github.com/coreybutler/nvm-windows) for windows
* Install [yarn](https://yarnpkg.com/lang/en/docs/install/)
* In the root directory of the project, run the following commands:
    - `nvm use`
    - `yarn install`


## Running tests

* To run tests, run the command `yarn test`
* To run in watch mode, run `yarn test:watch`


## How do I write tests in Jest?

The [Jest API](https://facebook.github.io/jest/docs/en/api.html) is a good resource.
