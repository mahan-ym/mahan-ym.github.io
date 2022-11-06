import './home.css';
import img from '../resources/me.jpg';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <img src={img} alt='mahan yarmohammad tajari' />
      </div>

      <a href='#download' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I'm a FullStack developer, currently focussed on Android Application development.<br></br>
          I Love Android and iOS development. Also I'm really interested in AI, Crypto, Web Development (both front-end and backend)
        </p>
      </h2>

    </div>
  );
}

export default Home;
