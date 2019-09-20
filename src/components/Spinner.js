import React, { Component } from 'react';

class Spinner extends Component {  
    constructor(props){
      super(props);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
  
    state = {
      position: 0,
      lastPosition: null
    }
    forceUpdateHandler() {
      this.reset();
    }; 
    
    reset() {
      // if timer exists, reset timer
      if (this.timer) { 
        clearInterval(this.timer); 
      }  
      
      // setting the start position
      this.start = this.setStartPosition();
      
      // reseting the position and the timer
      this.setState({
        position: this.start,
        timeRemaining: this.props.timer        
      });
      
      // initializing timer
      this.timer = setInterval(() => {
        this.tick()
      }, 100);     
    }
    // getting the height of the icon without restarting the component
    static iconHeight = 188;
    
    // setting the speed based in this current position
    multiplier = Math.floor(Math.random()*(4-1)+1);  
    start = this.setStartPosition();
    speed = Spinner.iconHeight * this.multiplier;    
    
    // positioning the height of the sprite 
    setStartPosition() {
      return ((Math.floor((Math.random()*9))) * Spinner.iconHeight)*-1;
    }
  
    // moving the background ad
    moveBackground() {
      this.setState({ 
        position: this.state.position - this.speed,
        timeRemaining: this.state.timeRemaining - 100
      })
    }
  
    getSymbolFromPosition() {
      let { position } = this.state;
      const totalSymbols = 9;
      const maxPosition = (Spinner.iconHeight * (totalSymbols-1)*-1);
      let moved = (this.props.timer/100) * this.multiplier
      let startPosition = this.start;
      let currentPosition = startPosition;    
  
      for (let i = 0; i < moved; i++) {              
        currentPosition -= Spinner.iconHeight;
  
        if (currentPosition < maxPosition) {
          currentPosition = 0;
        }      
      }
      
      // This enable the button <RepeatButton> to be triggered and validating the current position and message
      this.props.onFinish(currentPosition);
      // return this.props.onFinish(currentPosition);
    }
  
    tick() {      
      if (this.state.timeRemaining <= 0) {
        clearInterval(this.timer);        
        this.getSymbolFromPosition();    
  
      } else {
        this.moveBackground();
      }      
    }
  
    componentDidMount() {
      clearInterval(this.timer);
  
      this.setState({
        position: this.start,
        timeRemaining: this.props.timer
      });
  
      this.timer = setInterval(() => {
        this.tick()
      }, 100);
    }
  
    render() {
      let { position, current } = this.state;
  
      return (            
        <div 
          style={{backgroundPosition: '0px ' + position + 'px'}}
          className={`icons`}          
        />
      )
    }
}

export default Spinner;