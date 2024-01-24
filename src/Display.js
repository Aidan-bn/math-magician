/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import CalculateContext from './context/Context';

const Display = () => {
  const { calculate, setCalculate } = useContext(CalculateContext);
  if (!calculate) {
    // eslint-disable-next-line no-alert
    alert('null');
  }
  const { num } = calculate;

  return (
    <>
      <div className="screen">
        { num }
      </div>
    </>
  );
};

export default Display;
