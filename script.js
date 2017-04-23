$(document).on('click', 'a[href*=\\#]', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

function commentory(){
    if ('speechSynthesis' in window) {
        tospeak('Chelsaw is playing a match with 80 seconds remaining. Should I give you real-time updates?');
        setTimeout(startcom, 3500);
    }
    else{
        alert('You do not have Speech Synthesis in your browser else I would have given you live commentory. Please update your browser!')
    }
}
function startcom(){
    var commentory = confirm("Should I give you real time updates?");
    if(commentory==true){
        tospeak("You're a true fan!. Its playing against Barcelona. The score is 1 each. I'll keep you informed");
        setTimeout(function() {
            speechSynthesis.speak(new SpeechSynthesisUtterance("...Finally. Our player Sharma has scored a goal. Woohoooooo!"));
        }, 30000);
        setTimeout(function() {
            speechSynthesis.speak(new SpeechSynthesisUtterance("...Oh shit. Messi has got a free kick. We'll have to stay sharp"));
        }, 48000);
        setTimeout(function() {
            speechSynthesis.speak(new SpeechSynthesisUtterance("...History repeats itself. Messi has received a yellow card for abusing the referee"));
        }, 57000);
        setTimeout(function() {
            speechSynthesis.speak(new SpeechSynthesisUtterance("...A proud moment for chelsaw and its fans. We have won the match. Yay!"));
        }, 80000);
    }else{
        tospeak("That's strange. Well, maybe another time.");
    }
}
function tospeak(hello){
    speechSynthesis.speak(new SpeechSynthesisUtterance(hello));
}
function fancard(){
    var name= prompt("Good Choice. What name should be printed on the card?","Name");
    var pin= prompt("Please type in a password for your account","Password");
    var mail= prompt("Share your mail-id with us, we'll review your application and get back shortly!","Email");
    if(name!=null && pin!=null && mail!=null && name!="Name" && pin!="Password" && mail!="Email"){
        alert("Thanks for applying " + name);
    }else{
        alert("You must have left a field blank or not entered your own information. Try again.")
    }
}