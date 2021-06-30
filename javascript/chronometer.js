class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;
    

  }

  start() {
     
    const contar = () => {

    this.currentTime ++;

    }

    this.intervalId= setInterval (contar,1000)
  
  } 
  
  getMinutes() {
    // ... your code goes here
    let minutes = 0;
    if (this.currentTime >= 60) {
      minutes = (this.currentTime - (this.currentTime % 60)) / 60
    }
    return minutes
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime < 60) {
      return this.currentTime
    } else
    return this.currentTime % 60
  }
  
  computeTwoDigitNumber(value) {
    
    let number = '';
    if (value < 10)  {
      number = "0" + value 
    }

    else {
     
      number = `${value}` 
    }

    return number
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
   return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()); 
  }

  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
