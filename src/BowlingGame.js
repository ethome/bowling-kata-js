export default class BowlingGame {
  constructor() {
    this.frames = []
  } 

  roll(pins) {
    if (this.frames.length > 0 && this.frames[this.frames.length - 1].length <= 1) {
      this.frames[this.frames.length - 1].push(pins)
    } else {
      this.frames.push([pins])
    }
  }

  score() {
    let score = 0
    
    for(let i = 0; i < this.frames.length; i++) {
      let theFrame = this.frames[i]
      
      for (let j=0; j < theFrame.length; j++) {
        score = score + theFrame[j]
      }
    } 

    return score
  }
}
