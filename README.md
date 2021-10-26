Jason Poteet: Soccer Scores CLI application 
===========================================

<!-- table of contents -->
* [Description](#description)
* [System Requirements](#system-requirements)
* [Usage](#usage)
* [Testing](#testing)
* [Feedback](#feedback)
<!-- table of contents end -->

<!-- content body start -->
&nbsp;
# Description

Command-line application that reads a listing of game results for a soccer league as a stream and returns the top teams at the end of each matchday.

##### Note: This application does not use any 3rd party libs.  If this were to be a production level application, I would probably use a 3rd party lib (like: oclif, commander or yargs) as that would handle flags and arugments a lot more robustly.

&nbsp;
# System Requirements

I've really only tested this on Node 16. But it's pretty simple and should work on any relatively modern version of Node except for node 17.  It was recently released but
has some breaking changes that I didn't test against for this application.

## Suggestion is to use:
- Node v16.x.x
- NPM v7.x.x

&nbsp;
# Usage


To use this application, run
```bash
npm install -g
```
To install the application.  Once installed, you may simply run the command
```bash
soccerscores
```
and that will run the application with the default sample.txt.
If you wish to run it with a new file, simply run
```bash
soccerscores <location to file (i.e.: ~/Desktop/my_new_score_input.txt)>
```

&nbsp;
## Using with provided sample-text

```bash
soccerscores ./instructions/sample-input.txt
```

&nbsp;
# Testing

To run unit tests, In a terminal window make sure you are located at the root directory of this project, and run
```bash
npm test
```
or
```bash
npm run test:watch
```
This will also show a coverage report for each test file. Note: coverage thresholds are set to 90%, so it will error if the coverege falls below that.


&nbsp;
# Feedback

Please feel free to [message](mailto:jasonrpoteet+soccerscores@gmail.com) me with any feedback/comments.

<!-- content body end -->
