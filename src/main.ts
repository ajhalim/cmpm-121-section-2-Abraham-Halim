//purposely bad code so students can fix it - can make it worse

import './style.css'

const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
const bird = document.getElementById("bird")

const scoreText = document.getElementById("scoreText")
let score:number = 0
setText("click to start!")


let isJumping:boolean = false
let gameOver:boolean = true

document.addEventListener('click', jump)


setInterval(function () { Main()}, 10)

function Main()
{
    if(gameOver == false)
    {
        score = score + 1;
        setText("Score: " + score)

        checkGameOver()
        //return;
    }
}


function jump()
{
    if(gameOver === false && isJumping == false)
    {
        
            isJumping = true
            dino?.classList.add("jump")
            setTimeout(removeJump, 500)
        
    }
    else
    {
        startGame();
    }
    
}


function removeJump()
{
    dino?.classList.remove("jump")
    isJumping = false;
    //mainLoop = mainLoop //bug fix?
}

function removeObstacles()
{
    cactus?.classList.remove("cactusMove")
    bird?.classList.remove("birdMove")
}


function checkGameOver()
{

    if(gameOver == false && dino != null && cactus != null && bird != null)
    {
        //get is dinosaur jumping
        let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))

        //get cactus position
        let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

        //get bird position
        let birdPos = parseInt(window.getComputedStyle(bird).getPropertyValue("left"))

        //detect cactus collision

        //if dino
        if((dinoPos >= 150 && Math.abs(cactusPos) < 7) || (dinoPos <= 55 && Math.abs(birdPos) < 11))
        {
            endGame();
        }
    }
}

function endGame(){
    console.log("player died!")
            setText("Final Score: " + score + "! Click To Play Again!")
            gameOver = true

            //reset player
            removeJump()
            
            //reset cactus
            removeObstacles()
}


function startGame()
{
    console.log("Game started!")
    gameOver = false
    score = 0
    cactus?.classList.add("cactusMove")
    bird?.classList.add("birdMove")
}

function setText(s: string)
{
    if(scoreText)
    {
        scoreText.textContent = s
    }
}
