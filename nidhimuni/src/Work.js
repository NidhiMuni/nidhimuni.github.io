import React, { useState } from 'react';
import './App.css';

function Work() {
    const [isExpanded, setIsExpanded] = useState([false, false]);

    const toggleExpand = (index) => {
        setIsExpanded(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
        });
    };

  return (
    <div className="container">
        <div 
            className={`box ${isExpanded[0] ? 'expanded' : ''}`} 
            onClick={() => toggleExpand(0)}
        >
        {isExpanded[0] ? 'Click to collapse' : 'Click to expand'}
        </div>

        <div 
            className={`box ${isExpanded[1] ? 'expanded' : ''}`} 
            onClick={() => toggleExpand(1)}
        >
        {isExpanded[1] ? 'Click to collapse' : 'Click to expand'}
        </div>
        
    </div>
  );

}

export default Work;