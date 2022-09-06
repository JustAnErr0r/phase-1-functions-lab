function distanceFromHqInBlocks(p1) {
    return Math.abs(p1 - 42)
}
function distanceFromHqInFeet(p1) {
    return Math.abs(p1 - 42) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264)
}


console.log(distanceTravelledInFeet(50, 58))
function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    let dist = feet - 400
    if (dist < 1) {
      return 0
    } 
      else if (feet > 2500) {
      return `cannot travel that far`
    }
      else if (feet > 2000) {
      return 25
    }
        else if (dist < 2000) {
      return Math.abs(dist * 0.02) 
    }
    
  }

// console.log(distanceTravelledInFeet(55, 45))
// console.log(calculatesFarePrice(55, 45))
  


// function calculatesFarePrice(start, destination) {
//     const feet = distanceTravelledInFeet(start, destination)
//     const distance = feet - 400
//     if distance === 0
//         return "0"
// }