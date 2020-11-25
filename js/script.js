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
    year: '2001'
  },
  {
    quote: 'You gonna eat your tots?',
    source: 'Napoleon Dynamite',
    citation: 'Napoleon Dynamite',
    year: '2004'
  },
  {
    quote: 'Ye best start believin\' in ghost stories, Miss Turner. Yer in one. ',
    source: 'Captain Barbossa',
    citation: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    year: '2003'
  },
  {
    quote: 'I want to play a game.',
    source: 'Jigsaw',
    citation: 'Saw',
    year: '2004'
  },
  {
    quote: 'This is Sparta!',
    source: 'King Leonidas',
    citation: '300',
    year: '2006'
  }

];



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
  }
  html += `</p>`;
  
  return document.getElementById('quote-box').innerHTML = html;
}

/***
 *   Make click event listener for the print quote button 
 *
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

