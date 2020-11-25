/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * Make a quotes array of objects
***/
const quotes = [
  {
    quote: 'Life\'s a garden. Dig it.',
    source: 'Joe Dirt',
    citation: 'Joe Dirt ',
    year: '2001',
    type: 'Cinematic'
  },
  {
    quote: 'You gonna eat your tots?',
    source: 'Napoleon Dynamite',
    citation: 'Napoleon Dynamite',
    year: '2004',
    type: 'Cinematic'
  },
  {
    quote: 'Ye best start believin\' in ghost stories, Miss Turner. Yer in one. ',
    source: 'Captain Barbossa',
    citation: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    year: '2003',
    type: 'Cinematic'
  },
  {
    quote: 'I want to play a game.',
    source: 'Jigsaw',
    citation: 'Saw',
    year: '2004',
    type: 'Cinematic'
  },
  {
    quote: 'This is Sparta!',
    source: 'King Leonidas',
    citation: '300',
    year: '2006',
    type: 'Cinematic'
  },
  {
    source: 'Albert Einstein',
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe',
    
  },
  {
    source: 'Friedrich Nietzsche',
    quote: 'Without music, life would be a mistake.',
    citation: 'Twilight of the Idols'
  },
  {
    source: 'Dr.Seuss',
    quote: 'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.',
    type: 'Inspirational'
  },
  {
    source: 'William Shakespeare',
    quote: 'Love all, trust a few, do wrong to none.',
    citation: 'All\'s Well That Ends Well'
  },
  {
    source: 'Nelson Mandela',
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    type: 'Inspirational'
  },
  {
    source: 'Walt Disney',
    quote: 'The way to get started is to quit talking and begin doing.'
  },
  {
    source: 'Steve Jobs',
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    type: 'Inspirational'
  },
  {
    source: 'Eleanor Roosevelt',
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    type: 'Inspirational'
  }

];

// Make function that give me a random number 1 - 255
function randomNumber() {
  const randColor = Math.floor(Math.random() * 256) + 1;
  return randColor;
}

// Make function that changes background color
function changeBackgroundColor() {
  const body = document.querySelector('body');
  body.style.backgroundImage = `linear-gradient(to right, rgb(${randomNumber()},${randomNumber()},${randomNumber()}), rgb(${randomNumber()},${randomNumber()},${randomNumber()}))
                                `;
}



/***
 *   Make getRandomQuote function genetate random quote
***/

function getRandomQuotes() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}


/***
 *   Make printQuote function to print random quotes to page
***/
function printQuote() {
  const randomQuote = getRandomQuotes();
  let html = `
              <p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}
             `;
  
  if(randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  } if(randomQuote.year) {
    html +=  `<span class="year">${randomQuote.year}</span>`;
  } if(randomQuote.type) {
    html +=  `<span class="tags">, ${randomQuote.type}</span>`;
  }
  html += `</p>`;

  changeBackgroundColor();
  return document.getElementById('quote-box').innerHTML = html;
}

// Auto refresh quotes call printQuote Function every 10 seconds
setInterval(printQuote, 10000);

/***
 *   Make click event listener for the print quote button 
 *
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

