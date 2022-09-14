import React from 'react';

const Option = (props) => (
        <div className='option'>
            <p className='option__text'>{props.count}. {props.choice}</p>
            
            <button 
                className="button button--link"
                onClick={(e)=> {
                    props.handleDeleteOption(props.choice)
                }}
            >
                remove
            </button>
        </div>
);

export default Option;