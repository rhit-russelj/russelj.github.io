writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "When you have a dream, youve got to grab it and never let go.";
    quotes[1] = "Nothing is impossible. The word itself says Im possible!";
    quotes[2] = "The bad news is time flies. The good news is youre the pilot.";
    quotes[3] = "Success is not final, failure is not fatal: it is the courage to continue that counts.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }

onload = writeRandomQuote();