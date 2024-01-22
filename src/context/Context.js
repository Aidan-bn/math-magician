import { createContext, useState } from 'react';

export const CalculateContext = createContext();

const CalculatorProvider = (children) => {
  const [calculate, setCalculate] = useState({
    operator: '',
    num: 0,
    response: 0,
  });

  const providerValue = {
    calculate,
    setCalculate,
  };

  return (
    <CalculateContext.Provider value={providerValue}>
      { children }
    </CalculateContext.Provider>
  );
};

export default CalculatorProvider;
