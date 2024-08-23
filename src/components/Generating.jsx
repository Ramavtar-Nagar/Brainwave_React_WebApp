import React from 'react'

const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] 
    ${ className || "" }
    text-base
    `}
    >
        <img 
        src={loading} 
        className="h-5 w-5 mr-4" 
        alt="Loading" />
        AI is generating
    </div>
  );
};

export default Generating