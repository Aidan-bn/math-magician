import Nav from './Nav';
import Display from './Display';

const Home = () => (
  <>
    <Nav />
    <div className="home">
      <h4>
        You wanna perform calculations? Youre in a Right place.
      </h4>
      <Display />
      <p>
        We highly recommend you to download our mobile application to make
        it easy to use our calculator
      </p>
      <p>
        And in case you have any problem, do not hesitate to contact our team
        for support
      </p>
    </div>
  </>
);
export default Home;
