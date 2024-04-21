// Button.tsx

import React, { useState } from 'react';
export const Button: React.FC = () => {
const [count, setCount] = useState(5);

  const handleButtonClick = () => {
    setCount(count + 50);
  };

  return (
    <button onClick={handleButtonClick}>
        {count}
    </button>
  );
};

export default Button;



