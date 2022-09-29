import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {img, name, time, age} = props.activity;
    const {handleAddToList} = props;
    
    return (
        
         <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
            <p className='activity-name'>{name}</p>
            <p>For-Age: {age}</p>
            <p>Time required : {time}s</p>
             </div>
             <button  onClick={() => handleAddToList(props.activity)} className='btn-cart'>
             <p className='btn-p'>Add to list</p>
            </button>
         </div>
        
    );
};

export default Activity;