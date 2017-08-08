// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// change quote every 30 seconds
setInterval(printQuote, 30000);

//quotes is array of objects contaiing
// quote -> quote text
// source -> quote source
// citation (optional) -> quote publication
// year (optional) -> quote year
var quotes = [
    {
        tags:["tech","humour","programing"],
        quote:"Beware of bugs in the above code. I have only proved it correct, not tried it.",
        source:"Donald Knuth"
    },
    {
        tags:["tech"],
        quote:"640K ought to be enough for anybody.",
        source:"Bill Gates",
        year:"1981"
    },
    {
        tags:["tech","humour"],
        quote:"There are bugs and then there are bugs. And then there are bugs.",
        source:"Karl Lehenbauer"
    },
    {
        tags:["random"],
        quote:"The difference between theory and practice is always greater in practice than in theory.",
        source:"Unknown"
    },
    {
        tags:["tech"],
        quote:"Computers are useless. All they can do is give you answers.",
        ource:"Pablo Picasso"
    },
    {
        tags:[],
        quote:"Any sufficiently advanced technology is indistinguishable from magic.",
        source:"Arthur C. Clarke",
        citation:"Profiles of The Future",
        year:"1971"
    }
];
var quotesUsed = [];

var colorsArr = [
    '#ff0000',
    '#ff9900',
    '#009900',
    '#00cc00',
    '#009999',
    '#0099cc',
    '#0000ff',
    '#cc0066'
]

function createRandomNumber(upper) {
    return Math.floor(Math.random() * upper);
}

function getRandomQuote() {
    // get random number with quotes length as upper limit
    var quote;

    if(quotes.length > 0)
    {
        quote = quotes.splice(createRandomNumber(quotes.length),1);
        quotesUsed.push(quote[0]);
    }
    else
    {
        quotes = quotesUsed;
        quotesUsed = [];
        quote = quotes.splice(createRandomNumber(quotes.length),1);
        quotesUsed.push(quote[0]);
    }
    return quote[0];
};

function printQuote() {
    var randomQuote = getRandomQuote();
    
    // create initial quote construct
    var quoteText =     '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source"> ' + randomQuote.source;
    // checke to see if other properties exsist
    if(randomQuote.citation)
    {
        quoteText += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if(randomQuote.year)
    {
        quoteText += '<span class="year">' + randomQuote.year + '</span>';
    }
    if(randomQuote.tags && randomQuote.tags.length > 0)
    {
        quoteText += '<p class="source"> ' + randomQuote.tags.join(", ");
    }
    // close
    quoteText += '</p>';

    document.getElementById('quote-box').innerHTML = quoteText;

    // change color of background AND also change color of button to match
    var randomColor = colorsArr[createRandomNumber(colorsArr.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById('loadQuote').style.backgroundColor = randomColor;

};