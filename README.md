# tweeter Project

Tweeter is a simple, single-page Twitter clone.

It is a responsive web application that allows users to compose and post tweets. This project focuses on the front end of the application, implementing a user-friendly interface with a responsive design using HTML, CSS, AJAX and jQuery. The server code was provided.

## Final Product
!["Large screen with shown tweet composer"](https://github.com/m3c-ode/tweeter/blob/master/screens/top-large-show.png)
!["Large screen hidden composer"](https://github.com/m3c-ode/tweeter/blob/master/screens/top-large-hidden.png)
!["Small screen top of page"](https://github.com/m3c-ode/tweeter/blob/master/screens/top-small-show.png)
!["Small screen scrolled down"](https://github.com/m3c-ode/tweeter/blob/master/screens/scroll-small.png)

## Features

- Compose and post tweets with a character limit of 140 characters.
- Real-time character counter that updates as you type.
- Toggle button to show/hide the tweet composition box.
- Scroll-to-top button for easy navigation.
- Responsive design for seamless use on various screen sizes.

## Getting Started

To use this app, you will need:
- Node.js installed (version 12 or higher)
- npm (Node Package Manager) installed

1. Clone this repository and move into the folder:
    ```bash
    git clone https://github.com/m3c-ode/tweeter.git
    cd tweeter
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Start the application: 
    ```
    npm run local
    ```

4. Open your web browser and navigate to http://localhost:8080 where the app will be served, to start acccessing Tweeter.


## Using this app
A user can:
- Click on the top right animated red arrow if the "Compose Tweet" section is closed to open it. (And click again to close it).
- Enter a tweet message in the text area.
- The character counter will display the remaining characters available.
- Click the "Tweet" button to post your tweet (We also added the press "Enter" key functionality, as tweets are short text).
- Your tweet will appear in the list of tweets below, along with all previous one in reverse-chronological order.
- If scrolled down the page, click the scroll-to-top button to quickly return to the top of the page and start writing a tweet.
- Use this app on large or smaller screen

## Dependencies & Technologies Used

- HTML5
- CSS3
- Font Awesome icons
- Google Fonts
- SASS: A CSS preprocessor that extends the capabilities of CSS with features like variables, nesting, and mixins, helping streamline the styling process in web development.
- jQuery: A JavaScript library that simplifies HTML document traversal, event handling, and animation, making it easier to interact with and manipulate the DOM.
- Node.js: A JavaScript runtime environment that allows you to run JavaScript on the server-side.
- Express.js: A web application framework for Node.js that simplifies the process of building robust and scalable web applications.
- Chance: A library for generating random data, useful for creating test data or adding randomness to applications.

## Acknowledgments
Thanks to Lighthouse Labs for the inspiration and education.
