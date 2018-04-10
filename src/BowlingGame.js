export default class BowlingGame {
  constructor() {
    this.frames = []
  } 

  roll(pins) {
    // this.frames = []
    // this.frames = [[3]]p
    if (this.frames.length > 0 && this.frames[this.frames.length-1].length <= 1) {
      this.frames[this.frames.length-1].push(pins)
    } else {
      this.frames.push([pins])
    }
  }

  score() {
    let score = 0
    
    for(let i = 0; i < this.frames.length; i++) {
      let theFrame = this.frames[i]
      
      for (let j=0; j < theFrame.length; j++){
        score = score + theFrame[j]
      }
     
    } 
    return score
  }
}

// [[1, 3], [5, 5], [3, 6]]