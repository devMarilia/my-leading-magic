// import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import BigCard from '../components/BigCard';
import Carroussel from '../components/Carroussel';

const Home = () => {
  return (
    <div>
     <Banner /> 
     <Carroussel/>
     <BigCard/>
           {/* <Link to='/about' className='btn'>
        About
      </Link> */}
    </div>
  );
};
export default Home;