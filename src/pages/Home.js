// import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Carroussel from '../components/Carroussel';

const Home = () => {
  return (
    <div>
     <Banner /> 
     <Carroussel/>
           {/* <Link to='/about' className='btn'>
        About
      </Link> */}
    </div>
  );
};
export default Home;