//for player 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageFromSource1 = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageFromSource1);

//for player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageFromSource2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageFromSource2);

// Modifying the title according to the winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = ("🎉Player 1 wins!");
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = ("Player 2 wins!🎉");
}
else{
    document.querySelector("h1").innerHTML = ("It's a Draw!");
}