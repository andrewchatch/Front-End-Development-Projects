var currentQuote = {};
var colors = [
  "#7FFFD4",
  "#FFEBCD",
  "#A52A2A",
  "#5F9EA0",
  "#DC143C",
  "#00FFFF",
  "#006400",
  "#8FBC8F",
  "#FF1493",
  "#B22222",
  "#228B22"
];
var color = "#000000";
var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
    author: "Kobe Bryant"
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    quote: "Money and success don't change people; they merely amplify what is already there.",
    author: "Will Smith"
  },
  {
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author: "Henry Ford"
  },
  {
    quote: "In order to write about life first you must live it.",
    author: "Ernest Hemingway"
  },
  {
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard"
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Don't settle for what life gives you; make life better and build something.",
    author: "Ashton Kutcher"
  }
];

function getNewQuote() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  color = colors[Math.floor(Math.random() * colors.length)];
  $("#text").text('"' + currentQuote.quote +'"');
  $("#author").text("- " + currentQuote.author);
  $("body").css("background", color);
  
  $("#tweet-quote").attr("href", 
                      "https://twitter.com/intent/tweet?hashtags=quotes?text=" + encodeURIComponent('"' + currentQuote.quote + '"' + currentQuote.author));
}

$(document).ready(function() {
  getNewQuote();
});