# ToDo React-Native

## Description

Create a ToDo list using React Native.

This was based off of the app made in the [React Tutoral of the MDN website](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started).

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)

## User Story

AS A time concious individual
I WANT a list of itmes to do
SO THAT I can keep track of what has been done and what still needs to be done

## Acceptance Criteria

GIVEN a list of tasks

WHEN I load the list
THEN I am presented with a way to add to, filter, and update a list of tasks

WHEN I enter a task
THEN the task is saved and added to the active list

WHEN I select a filter button
THEN I am presented with a list of only the items in the filter

WHEN I click on a task's name
THEN the task will toggle between active and completed (as indicated by an icon and background color)

WHEN I click Edit
THEN, in line, I can update the name of the task or cancel the update

WHEN I click Delete
THEN the task is removed from the list completely

## Usage

Download and then do an `npm start` to launch the app. A QR code will then be displayed to download to your device or you can run it in an emulator.

## Technologies

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)

## Credits

I found the [React Native Tutorial for Beginners - Build a React Native App [2020]](https://www.youtube.com/watch?v=0-S5a0eXPoc) by Programming with Mosh to be extrmly helpful in setting up my environment and taking the first steps in writing the application.

## ToDos

Some ideas on how to improve the app:

[ ] add a config to store colors and other common style variables

[ ] change the filter buttons to "pressable" buttons so that they display nicely (especially since they are more selectors than buttons)

[ ] work on the interaction and flow. In the emulator, the keyboard has issues on the edit task

[ ] fix the app to deal with longer task names
