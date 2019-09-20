import React from 'react';

const WinningSound = () => {
    
    return (
        <audio autoplay="autoplay" className="player" preload="false">
          <source src="./assets/winning_slot.wav" />
        </audio>  
    );
    
}

export default WinningSound;