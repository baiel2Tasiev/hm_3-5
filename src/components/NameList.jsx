import React from 'react';
import { useSelector } from 'react-redux';

const NameList = () => {
  const names = useSelector(state => state.names);

  return (
    <div>
      
      <ul>
        {names.map((name, index) => (
          <h3 key={index}>{name}</h3>
        ))}
      </ul>
    </div>
  );
};

export default NameList;