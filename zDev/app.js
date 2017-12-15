//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// DATA CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var navController = (function(){
    
    //// VARIABLES ////
    var map = {
        a: [],
        b: [],
        c: [],
        d: []
        };
    //// VARIABLES ////
    var map = [ ['00', 'to the left'], [['all ahead full'], [1,1], [1,2], [1,3]], [[2,0], [2,1], [2,2], [2,3]], [[3,0], [3,1], [3,2], [3,3]]];
    var curLocation = [0, 0];
    var curRoom = map[curLocation[0]][curLocation[1]];
    var directionList = ['north', 'east', 'south', 'west', ];
    
    var forwardIs = directionList[0];
    
    var roomTypeChance = {
        lore: 0.2,
        battle: 0.45,
        chest: 0.6,
        relic: 0.8,
        shop: 0.9,
        boss: 1,
        }
    
    
    //// FUNCTIONS ////
    function Room(type, doors, items, enemies, lore){
        this.type = type;
        this.doors = doors;
        this.items = items;
        this.enemies = enemies;
        this.lore = lore;
    }
    
    function genRandomType(){
        console.log('genRandomType');
        var random = Math.random().toFixed(1);
        var curRoomType = '';
        console.log(random);
        
        
        switch(true){
            case (random < roomTypeChance.lore):
                curRoomType = 'lore';
                break;
            case (roomTypeChance.lore <= random < roomTypeChance.battle):
                curRoomType = 'battle';
                break;
            case (roomTypeChance.battle <= random < roomTypeChance.chest):
                curRoomType = 'chest';
                break;
            case (roomTypeChance.chest <= random < roomTypeChance.relic):
                curRoomType = 'relic';
                break;
            case (0.9 > random >= 0.8):
                curRoomType = 'shop';
                break;
            case (roomTypeChance.shop <= random):
                curRoomType = 'boss';
                break;
            default:
                break;
            };
        console.log(curRoomType);
        return curRoomType;
    };
    
    function genDoorLayout(){
        
        // which sides no doors
            
        
        // which direction facing?
        
        // which doors (left forward right backward)
        
    }
    
    function generateMap(roomNum){
        
        // create roomNum number of rooms
            
            // randomly gen what type    
            var whatType = genRandomType();
            console.log('whatType is ' + whatType);
        
            // randomly gen door layout
            
            
            // randomly gen items
        
            // gen enemies if applicable
        
            // gen lore if applicable
        
            // new Room object 
            
        // push new room obj to correct row in map variable
    }
        var RoomChangeCtrl = (function(){
            // ROOM CHANGE: START //////////
            // ROOM CHANGE: START //////////
            // ROOM CHANGE: START //////////
            function roomChange(btnId){
                genRandomType();
                switch(btnId){
                    case 'leftDoor':
                        calcForwardIs('left');
                        console.log(forwardIs);
                        break;
                    case 'forwardDoor':
                        console.log(forwardIs);
                        break;
                    case 'rightDoor':
                        calcForwardIs('right');
                        console.log(forwardIs);
                        break;
                    case 'backwardDoor':
                        calcForwardIs('backward');
                        console.log(forwardIs);
                        break;
                    default:
                        break;
                            };

                updateCurRoom();
            };

            // Reorient forward based on which door they go through
            function calcForwardIs(whichDoor){
                switch(whichDoor){
                    case 'left':
                        directionList.rotate(-1);
                        forwardIs = directionList[0];
                        return;
                    case 'right':
                        directionList.rotate(1);
                        forwardIs = directionList[0];
                        return;
                    case 'backward':
                        directionList.rotate(2);
                        forwardIs = directionList[0];
                        return;
                    default:
                        console.log('switch in calcForwardIs error: which door inpu was ' + whichDoor);
                        return;
                    };
            };

            // update which array item is the current room
            function updateCurRoom(){
                var tempLocation = curLocation;
                var curDirection = directionList[0];

                // change current coordinates depending on direction of movement (north, south, east, west, ect)
                switch(curDirection){
                    case 'north':
                        if((map.length - 1) !== tempLocation[0]){
                            tempLocation[0] += 1;
                            updateCurRoomCoor(tempLocation);
                        } else {
                                console.log('youve reached the edge of the world at ' + tempLocation);
                            };
                        break;
                    case 'south':
                        if(tempLocation[0] !== 0){
                            tempLocation[0] -= 1;
                            updateCurRoomCoor(tempLocation);
                        } else {
                                console.log('youve reached the edge of the world at ' + tempLocation);
                            };
                        break;
                    case 'west':
                        if((map[tempLocation[0]].length - 1) !== tempLocation[1]){
                            tempLocation[1] += 1;
                            updateCurRoomCoor(tempLocation);
                        } else {
                                console.log('youve reached the edge of the world at ' + tempLocation);
                            };
                        break;
                    case 'east':
                        if(tempLocation[1] !== 0){
                            tempLocation[1] -= 1;
                            updateCurRoomCoor(tempLocation);
                        } else {
                                console.log('youve reached the edge of the world at ' + tempLocation);
                            };
                        break;
                    default:
                        console.log('updateCurRoom run no effect');
                        break;
                };

            };

            // update and refresh the curLocation and curRoom variables
            function updateCurRoomCoor(newCoors){

               curLocation = newCoors;
                    curRoom = map[newCoors[0]][newCoors[1]];
                    console.log(curLocation);
            };

            // adding a 'rotate' function to the array primitive object which allows the items in an array to shuffle left or right so many indexes
            Array.prototype.rotate = function(howMuch){
                this.unshift.apply(this, this.splice(howMuch, this.length))
            };

            // ROOM CHANGE: END //////////
            // ROOM CHANGE: END //////////
            // ROOM CHANGE: END //////////

                return{
                    roomChange: roomChange
            }
        })();
    

    
    
    
    return {
       roomChange: RoomChangeCtrl.roomChange
    }
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// UI CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var UIController = (function(){
    
    //// VARIABLES ////
    
    
    //// FUNCTIONS ////
    function listToArray(nodeList){
        var tempList, newArray;
        tempList = nodeList;
        newArray = [];
        console.log(newArray);
        
        for (i = 0; i < nodeList.length; i++){
            newArray[i] = nodeList[i];
        };
        return newArray;
    };
    
    return {
       
    }
})();



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// APP CONTROLLER >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

var gameController = (function(navCtrl, UICtrl){
    
    
    
    function innit(){
        document.querySelector('#navButtons').addEventListener('click', function(){
            navCtrl.roomChange(event.target.id);
            
        });
    };
    
    return {
       innit: innit
    }
})(navController, UIController);

gameController.innit();






//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// CODE Tools >>>

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//// XXXXXXXXXXX ////


// START... //// xxTITLExx xxDescriptionxx //////////////// M.M.

// ...END //// xxTITLExx xxDescriptionxx //////////////// M.M.

