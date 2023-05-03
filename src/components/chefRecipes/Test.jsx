import React, { useState } from 'react';

const Test = () => {
    const [buttonsDisabled, setButtonsDisabled] = useState({});

  const handleClick = (index) => {
    setButtonsDisabled({...buttonsDisabled, [index]: true});
  };

  const data = [    {id: 1, name: 'Button 1'},    {id: 2, name: 'Button 2'},    {id: 3, name: 'Button 3'}  ];

    return (
        <div>
        {data.map((item, index) => (
          <button
            key={item.id}
            disabled={buttonsDisabled[index]}
            onClick={() => handleClick(index)}
            className={`bg-blue-500 text-white rounded-md py-2 px-4 ${buttonsDisabled[index] ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
};

export default Test;