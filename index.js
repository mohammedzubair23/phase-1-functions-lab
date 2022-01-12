// Code your solution in this file!
function distanceFromHqInBlocks(area) {
  if(area > 42) {
      return area-42; 
  } else {
      return 42-area;
  }
    
}
function distanceFromHqInFeet(street) {
    if(street > 42) {
        return (street - 42) * 264; 
    } else {
        return (42 - street) * 264;
    }
}

function distanceTravelledInFeet(num1, num2) {
    return [Math.abs(num1 - num2)] * 264}


    function calculatesFarePrice(start, end) {
        const distanceTravelled = distanceTravelledInFeet(start, end); 
        if (distanceTravelled < 400) {
          return 0;
        } else if (distanceTravelled >= 400 && distanceTravelled < 2000) {
          return (distanceTravelled - 400) / 50;
        }
        else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
          return 25;
        }
        else {
          return 'cannot travel that far';
        }
      }
