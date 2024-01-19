import Nav from './Nav';
import Button from './Button';

const Calculator = () => {
  const side = 'Hello, you wanna perfom heavy Maths? Here we go!';
  return (
    <>
      <Nav />
      <div className="buttons">
        <p>
          { side }
        </p>
        <Button />
      </div>
    </>
  );
};

export default Calculator;
