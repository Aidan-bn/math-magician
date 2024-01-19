import { useState } from 'react';
import Nav from './Nav';

const Calculator = () => {
  const [view, setView] = useState(1);
  const change = () => {
    setView(view + 10);
  };

  return (
    <>
      <Nav />
      <section className="calc-section">
        <h4>
          Let us do some calculations!
        </h4>
        <div className="calculator">
          <div className="top">
            <input
              type="text"
              className="enter"
              id="enter"
            />
            <input
              type="text"
              className="result"
              id="result"
            />
          </div>
          <div id="button" className="button">
            <button
              type="button"
              className="btn-content"
              onClick={change}
            >
              +/-
            </button>
            <button
              type="button"
              className="btn-content"
            >
              AC
            </button>
            <button
              type="button"
              className="btn-content"
            >
              c/o
            </button>
            <button
              type="button"
              className="btn-content"
            >
              +
            </button>
            <button
              type="button"
              className="btn-content"
            >
              7
            </button>
            <button
              type="button"
              className="btn-content"
            >
              8
            </button>
            <button
              type="button"
              className="btn-content"
            >
              9
            </button>
            <button
              type="button"
              className="btn-content"
            >
              x
            </button>
            <button
              type="button"
              className="btn-content"
            >
              4
            </button>
            <button
              type="button"
              className="btn-content"
            >
              5
            </button>
            <button
              type="button"
              className="btn-content"
            >
              6
            </button>
            <button
              type="button"
              className="btn-content"
            >
              -
            </button>
            <button
              type="button"
              className="btn-content"
            >
              1
            </button>
            <button
              type="button"
              className="btn-content"
            >
              2
            </button>
            <button
              type="button"
              className="btn-content"
            >
              3
            </button>
            <button
              type="button"
              className="btn-content"
            >
              /
            </button>
          </div>
          <div id="lower-btn">
            <button
              type="button"
              className="btn-content"
            >
              0
            </button>
            <button
              type="button"
              className="btn-content"
            >
              .
            </button>
            <button
              type="button"
              className="btn-content"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
