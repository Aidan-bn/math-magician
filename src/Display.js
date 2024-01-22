import { useContext } from 'react';
import { CalculateContext } from './context/Context';

const Display = () => {
  const calculate = useContext(CalculateContext);

  return (
    <>
      <div className="screen">
        { calculate }
      </div>
    </>
  );
};

export default Display;
