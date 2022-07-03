import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
     <Banner /> 
           <Link to='/about' className='btn'>
        About
      </Link>
    </div>
  );
};
export default Home;