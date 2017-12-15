var map = [['00', '02'], ['yo', '1/1', '1/2', '1/3'], ['2/0', '2/1', '2/2', '2/3'], ['3/0', '3/1', '3/2', '3/3']];//////////////////////////////////////////////////
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
    
    var map = [['XxX11', 'XxX12'], ['XxX21', 'XxX22', 'XxX23', 'XxX24'], ['XxX30', 'XxX31', 'XxX32', 'XxX33'], ['XxX40', 'XxX41', 'XxX42', 'XxX43']];
     
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
        console.log(map.length);
        return curRoomType;
    };
    
    function genDoorLayout(){
                        
        var curDoorOptions = {
                westDoor: true,
                northDoor: true,
                eastDoor: true,
                southDoor: true
                   };

        // which sides no doors
        if(curLocation[0] === 0){
                    curDoorOptions.southDoor = false;
        };
        if(curLocation[1] === 0){
                curDoorOptions.eastDoor = false;
        }
         if(curLocation[0] === (map.length - 1)){
                curDoorOptions.northDoor = false;
                
         }
          if(curLocation[1] === (map[curLocation[0]].length - 1)){
                curDoorOptions.westDoor = false;
          }
        
        console.log('eastDoor is '+ curDoorOptions.eastDoor);
        console.log('northDoor is '+ curDoorOptions.northDoor);
        console.log('westDoor is '+ curDoorOptions.westDoor);
        console.log('southDoor is '+ curDoorOptions.southDoor);


        
        return curDoorOptions;
        // which direction facing?
        
        // which doors (left forward right backward)
        
}
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

    function generateMap(roomNum){
        
        // create roomNum number of rooms
            
            // randomly gen what type    
            var whatType = genRandomType();
            console.log('whatType is ' + whatType);

            // randomly gen door layout
            var doorLayout = genDoorLayout();
            console.log('Door layout is '+ doorLayout);
        
            // randomly gen items
        
            // gen enemies if applicable
        
            // gen lore if applicable
        
            // new Room object 
            
        // push new room obj to correct row in map variable
    };
        var RoomChangeCtrl = (function(){
            // ROOM CHANGE: START //////////
            // ROOM CHANGE: START //////////
            // ROOM CHANGE: START //////////
            function roomChange(btnId){
                genRandomType();
                switch(btnId){
                    case 'leftDoor':
                        updateCurRoom(directionList[3]);
                        calcForwardIs('left');
                        
                        break;
                    case 'forwardDoor':
                        updateCurRoom(directionList[0]);
                        calcForwardIs('forward');
                        
                        break;
                    case 'rightDoor':
                        updateCurRoom(directionList[1]);
                        calcForwardIs('right');
                        
                        break;
                    case 'backwardDoor':
                        updateCurRoom(directionList[2]);
                        calcForwardIs('backward');
                        
                        break;
                    default:
                        break;
                            };
            
             genDoorLayout();
            console.log(forwardIs);    
            };

              
            // update which array item is the current room
            function updateCurRoom(whichDoor){
                var tempLocation = curLocation;

                // change current coordinates depending on direction of movement (north, south, east, west, ect)
                switch(whichDoor){
                    case 'north':
                        if(((map.length - 1) !== tempLocation[0]) && (tempLocation[0] + 1)){
                            tempLocation[0] += 1;
                            updateCurRoomCoor(tempLocation);
                        } else {
                                console.log('youve reached the edge of the world at ' + tempLocation);
                            };
                        break;
                    case 'south':
                        if((tempLocation[0] !== 0) && map[(tempLocation[0] - 1)].length > tempLocation[1]){
                            tempLocation[0] -= 1;
                            updateCurRoomCoor(tempLocation);
                        } else {
                                console.log('youve reached the edge of the world at ' + tempLocation);
                            };
                        break;
                    case 'west':
                        if(((map[tempLocation[0]].length - 1) !== tempLocation[1]) && (tempLocation[1] + 1)){
                            tempLocation[1] += 1;
                            updateCurRoomCoor(tempLocation);
                        } else {
                                console.log('youve reached the edge of the world at ' + tempLocation);
                            };
                        break;
                    case 'east':
                        if((tempLocation[1] !== 0) && (tempLocation[1] - 1) >= 0){
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
                    roomChange: roomChange,
                    map: map
            }
        })();
    

    
    
    
    return {
       roomChange: RoomChangeCtrl.roomChange,
        directionList: directionList,
        map: map,
        curLocation: curLocation
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
    var htmlStrings = {
        ids:{
            compass:['forward', 'right','backward', 'left'],
            map: 'map'
            }
        }
    function updateCurrentRoomMap(someMap, curRoom){
        
        var roomList = document.querySelectorAll('.mapRoom');
        
        var roomArray = listToArray(roomList);
        roomArray.forEach(function(cur){
            cur.style.className = 'mapRoom';
            cur.classList.remove('currentRoom');
        });
        
           document.querySelector('#'+someMap[curRoom[0]][curRoom[1]]).classList.add('currentRoom');
    }
    function updateCompass(directionArray){
        
        htmlStrings.ids.compass.forEach(function(cur, index){
            document.querySelector('#' + cur).textContent = directionArray[index];
        });
    };
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
    
    function printMap(mapArray){
        var tempArray = mapArray;
        var tableHtml = '';
        console.log(tempArray);
        tempArray.forEach(function(cur){
            var tdValues = '';
            
            cur.forEach(function(cur){
                var tempValue = '<td>' + cur + '</td>';
                tdValues += tempValue;
            })
           var trString = '<tr>' + tdValues + '</tr>';
            tableHtml += trString;
            
        });
        document.querySelector('#'+htmlStrings.ids.map).innerHTML = tableHTML;
    };
    
    return {
       updateCompass: updateCompass,
        printMap: printMap,
        updateCurrentRoomMap: updateCurrentRoomMap
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
    
    function printMap(){
       var tableHtml = '';
        navCtrl.map.forEach(function(cur){
            var tdValues = '';
            console.log(cur);
            cur.forEach(function(cur){
                var tempValue = '<td class="mapRoom" id="'+cur+'">' + cur + '</td>';
                tdValues += tempValue;
            })
           var trString = '<tr>' + tdValues + '</tr>';
            tableHtml += trString;
            
        });
        document.querySelector('#map').innerHTML = tableHtml;
        
    };
    
    function innit(){
       printMap(); 
       UICtrl.updateCurrentRoomMap(navCtrl.map, navCtrl.curLocation);
        document.querySelector('#navButtons').addEventListener('click', function(){
            navCtrl.roomChange(event.target.id);
            UICtrl.updateCompass(navCtrl.directionList);
           
           UICtrl.updateCurrentRoomMap(navCtrl.map, navCtrl.curLocation);
           
            
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

