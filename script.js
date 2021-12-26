// 2 = box, 1 = coin, 0 = empty
var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,2,1,1,1,1,1,2],
    [2,1,1,2,1,2,2,2,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,2,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

var score = 0;

var pacman = {
    x: 1,
    y: 1
};

//List of features to build

//1) Hav JS display the world or brick/coin/etc 2 = brick, 1 = coin

function displayWorld(){
    var output = '';
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for (var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}
function displayPacman(){ //shows you where pacman will be displayed in the world
    document.getElementById('pacman').style.top = pacman.y*50+"px"; //pacman.y*50 +"px" moves pacman in that direction by the number of pixels
    document.getElementById('pacman').style.left = pacman.x*50+"px";
}

function displayScore(){ 
    document.getElementById('score').innerHTML = score; 
}

displayWorld()
displayPacman()
displayScore()

//2) Have the pacman move up and down

// when the browser executes the function of on down key property, the browser passes in an object (e)

// top = 38, left = 37, right = 39, bottom = 40, space bar = 32

// keyCode is where you can find the number that is outputed based on which key you press (up, down, left, right)
document.onkeydown = function(e){
    // console.log(e.keyCode);
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){ // Left arrow key
        pacman.x--; // click left arrow to move pacman to the left
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){ // right arrow key
        pacman.x++;
    }
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){ // top arrow key
        pacman.y--;
    }
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){ // bottom arrow key
        pacman.y++;
    }

    if(world[pacman.y][pacman.x] == 1){ // If pacman finds a coin
        world[pacman.y][pacman.x] = 0; // remove coin from world by replacing it with empty
        score+=10;
        displayWorld();
        displayScore();
    }
    // console.log(e.KeyBoardEvent.keyCode);
    displayPacman();
}

// .KeyBoardEvent