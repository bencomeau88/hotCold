$(document).ready(function() {
    var compGuess = Math.floor((Math.random() * 100) + 1);
    console.log("the computer guesses " + compGuess)
    var numberOfGuesses = 0;
    var guesses = [];


    $('.what').on("click", function() {
        $(".overlay").fadeIn(500);
    });
    $('a.close').on("click", function() {
        $('.overlay').fadeOut(50);
    });



    $('form').submit(function(e) {
        e.preventDefault();
        game();

    });

    $('.new').on('click', function() {
        location.reload(true);
    });

    function game() {
        var guess = parseInt($('#userGuess').val());
        console.log(guess);
        var guessLi = '<li> ' + guess + ' </li>';
        // var guessInt = parseInt(guess);
        // guess = guessInt;
        var difference = Math.abs(compGuess - guess);
        console.log(difference);
        
       	if (Number.isNaN(guess) || guess >= 101) {
            $('#error').show();
            $('#feedback').hide();
        } 
        else 
        	{
            $('#guessList').append(guessLi);
            numberOfGuesses++;
            $('#count').text(numberOfGuesses);

            if (guess === compGuess) {
                $('#feedback').text('yay');
            } else if (difference <= 3) {
                $('#feedback').text('SCALDING, ouch.');
            } else if (difference <= 5) {
                $('#feedback').text('Hot');
            } else if (difference > 5 && difference < 10) {
                $('#feedback').text('Luke Warm');
            } else if (difference > 10 && difference < 20) {
                $('#feedback').text('Cold');
            } else if (difference > 20 && difference < 30) {
                $('#feedback').text('Real Cold');
            } else if (difference > 30 && difference < 50) {
                $('#feedback').text('Looks Like It May Snow...That Cold');
            } else {
                $('#feedback').text('Keep Shooting, Tex')
            }


        }

    }

    // function numCheck(guess){
    // 	if (isNaN(guess)){
    // 		console.log('poops');
    // 	}
    // 	else {
    // 		console.log('pee')
    // 	}
    // }



});
