import Display from './Display';

const Button = () => {
  const buttons = [['C', '+/-', '%', '/'], [7, 8, 9, 'X'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']];
  const specialColor = (button) => {
    const className = {
      0: 'zero',
      '+': 'operator',
      '=': 'operator',
      '-': 'operator',
      '/': 'operator',
      X: 'operator',
    };
    return className[button];
  };

  return (
    <>
      <div className="top">
        <Display />
        <div className="button-area">
          {buttons.flat().map((button) => (
            <button
              type="button"
              key={button}
              className={`${specialColor(button)} btn-content`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Button;
