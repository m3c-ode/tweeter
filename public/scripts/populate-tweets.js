// const fs = require('fs');

// // absolute relative to project? or use relative?
// fs.readFile("server/data-files/initial-tweets.json", 'utf8', (error, data) => {
//   console.log('data from file', data);
// });

// const createTweetElement = (tweetObj) => {
//   return `<article class="tweet-container">
//       <header class="tweet-header">
//         <div class="name-image">
//           <img src="https://i.imgur.com/73hZDYK.png" alt="avatar" />
//           <span class="user-name">Newton</span>
//         </div>
//         <span class="user-tag">@SirIsaac</span>
//       </header>
//       <p>This is the tweet</p>
//       <!-- <br> -->
//       <footer>
//         <div>10 days ago</div>
//         <div class="icons">
//           <i class="fa-solid fa-flag"></i>
//           <i class="fa-solid fa-retweet"></i>
//           <i class="fa-solid fa-heart"></i>
//         </div>

//       </footer>
//     </article>`;
// };

// const getData = function() {

//   $.getJSON("./data-files/initial-tweets.json", (data) => {
//     console.log('data', data);

//   });
// $.ajax("../server/data-files/initial-tweets.json", { method: 'GET' })
//   .then((data) => {
//     console.log('data', data);
//   });
// };

// getData();