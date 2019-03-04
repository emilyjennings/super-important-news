# Super Important News app

This is a project I did using React to display some Hacker News items in a more digestible way to the reader.

### Background and message to LiveSafe

When making this app, I had only started to learn React about a month beforehand. I had yet to make a complete React app of my own yet, so this is my first React app from scratch. Since I was given an assignment in Angular which I had never seen before, I spent a few hours looking at the assignment and its file structure, syntax, reading Angular documentation - and came to terms with the fact that I would not be able to complete the assignment without ample time to learn Angular from scratch (which I am excited to do, but not in this context where a quick turnaround is necessary). I then decided that the best thing I could turn out was this React version I built from scratch. It's by no means perfect, but I had fun learning by doing it, and using my CSS styling skills to make it look nice.

### Main goals:

1.) Make cards that display the news items withe the titles, website source, poster username, points, and number of hours in the past it was posted. API: https://node-hnapi.herokuapp.com/news

2.) Implement a search field that narrows the search results as the user types.

3.) Write a test that determines if the search field was written properly, if there's time.

### Planning and What I'd Do With More Time:

March 2, 2019 - First, make a react app with a component that calls the Hacker News API, makes a get request, and returns the results I need.

Then, make a card component that displays this information in a readable way. CSS styling will be needed. Have the cards display on the page.

Make a container component that houses these two components related to the cards.

Make a new component for searching, and one for the search box. Put them in a container component for search.

What I'll need to research/look up:
How others have called the Hacker News API before using React. Should I use fetch or axios to call it?
How others have created a dynamic search feature in React.
Other examples of React Hacker News apps open source to see how they put it together.

March 3, 2019 - I worked on the styling of the cards and started trying the search bar. I tried many things by reading documentation and projects/questions others have written, but I just needed more time.

I believe that I needed more knowledge and practice with React props. I think this week I'll make the search bar that narrows the results by typing, but I wasn't able to do it yet. I know it would involve a conditional that checks if the value in the search bar exists and uses that to call the api at http://hn.algolia.com/api/v1/search?query=

With more time, I'd also research how tests are written in React - I've seen them in JavaScript before - and write a test to see if the search feature works.

### Problems Encountered and Solutions

I had trouble getting the React app to be structured with a container component at first. After looking at other repos with container components and unsuccessfully trying to make mine work, I decided to start with the basics and just make the app output what I wanted to using a less complex structure but with a less organized structure. My plan would be to go back later and refactor to learn how to successfully make a container component.

I used ajax but I want to be able to call the API with either fetch or axios, and this would be part of the refactoring process as well. Again, my goal was to get this going as fast as possible.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
