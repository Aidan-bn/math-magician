import Nav from './Nav';

const Calculator = () => (
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
            id="enter"
          />
        </div>
        <div id="button" className="button">
          <div className="btn-content">
            +/-
          </div>
          <div className="btn-content">
            AC
          </div>
          <div className="btn-content">
            c/o
          </div>
          <div className="btn-content">
            +
          </div>
          <div className="btn-content">
            7
          </div>
          <div className="btn-content">
            8
          </div>
          <div className="btn-content">
            9
          </div>
          <div className="btn-content">
            x
          </div>
          <div className="btn-content">
            4
          </div>
          <div className="btn-content">
            5
          </div>
          <div className="btn-content">
            6
          </div>
          <div className="btn-content">
            -
          </div>
          <div className="btn-content">
            1
          </div>
          <div className="btn-content">
            2
          </div>
          <div className="btn-content">
            3
          </div>
          <div className="btn-content">
            /
          </div>
        </div>
        <div id="lower-btn">
          <div className="btn-content">
            0
          </div>
          <div className="btn-content">
            .
          </div>
          <div className="btn-content">
            =
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Calculator;
