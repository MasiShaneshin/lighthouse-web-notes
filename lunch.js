const whatToDoForLunch = function(hungry, availableTime) {
  if (!hungry) {
    console.log("got back to work");
  } else {
    if (availableTime < 20) {

      console.log("pick something up and eat in back in the Lab or in the kitchen");
    
    } else if (availableTime > 20 && availableTime < 30) {

      console.log("you deserve a break and could try a place in Gastown");
    } else if (availableTime > 30) {
      console.log("this is a bootcamp after all and you should probably reconsider.");

    }

  }

};

//console.log("hungry is", hungry);
//console.log("availableTime is", availableTime);
whatToDoForLunch(true, 15);
whatToDoForLunch(true, 25);
whatToDoForLunch(false, 35);
