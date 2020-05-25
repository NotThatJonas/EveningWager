function newQuote() {
    $.getJSON("./wager.json", function(result){
        let randomQuote = 0;
        randomQuote = Math.random() * (result.length - 0) + 0;
        randomQuote = randomQuote.toFixed(0);
        console.log(result.length);
        console.log(randomQuote);

        console.log(result[randomQuote].quote);

            $('#text').html(result[randomQuote].quote);
        
})
}

$(document).ready(newQuote());