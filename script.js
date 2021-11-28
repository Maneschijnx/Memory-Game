//Select wrapper.
const play_area = document.querySelector('.memory-wrapper');
//Select won cards wrapper
const correct_cards = document.querySelector('.cards-found');
//Select result-show-heaeder
const result_show = document.querySelector('.result-h1');
//Temp storage for items that are clicked.
var chosenCards = [];
var chosenCardsId = [];

//Storage for cards won.
var correctCards = [];

//Generate cards randomly.
PLAY_CARDS.sort(() => 0.5 - Math.random())

//Create Play-Area
let boardCreatiion = () => {
    //Loop trough length of memory
    for(i = 0; i < PLAY_CARDS.length; i++){
        //Create cards
        var card = document.createElement('img');
        card.setAttribute('src', 'img/default.jpg');
        card.id = i;
        card.classList.add('cards');
        //Handling when user clicks a card.
        card.addEventListener('click', function(e){
            clickedCard = e.target.id;
            chosenCards.push(PLAY_CARDS[clickedCard].name);
            chosenCardsId.push(clickedCard);
            e.target.setAttribute('src', PLAY_CARDS[clickedCard].img)
            //If user has chosen 2 cards,
            setTimeout(function(){
                if(chosenCards.length == 2){
                    verifyCard();
                }
            },300)

        })
        //Add card to play_area
        play_area.appendChild(card)
    }
}

//Verification for cards.
let verifyCard = () => {
    var cards = document.querySelectorAll('img');
    var optionOne = chosenCardsId[0]
    var optionTwo = chosenCardsId[1]
    //If card is correct
    if(chosenCards[0] === chosenCards[1] && optionOne != optionTwo ){
        correctCards.push(chosenCards)
            chosenCardsId.forEach(index => {
                document.getElementById(index).remove();
            })
        //Show card that was found.
        let wonCard = document.createElement('img');
        wonCard.setAttribute('src', PLAY_CARDS[chosenCardsId[0]].img)
        wonCard.classList.add('cards');
        correct_cards.appendChild(wonCard);
    }
    else
    //If card is incorrect
    {
        //Show default picture
            document.getElementById(optionOne).setAttribute('src', 'img/default.jpg');
            document.getElementById(optionTwo).setAttribute('src', 'img/default.jpg')
    }
    //Check if all cards are found
    chosenCards = [];
    chosenCardsId = [];
    if(correctCards.length === PLAY_CARDS.length/2){
        result_show.innerHTML = "You won!";
    }
}

//Init game
boardCreatiion()