// import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import BigCard from '../components/BigCard';
import Card from '../components/Card';
import Carroussel from '../components/Carroussel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
     <Banner /> 
     <Carroussel/>
     <BigCard/>
     <Card/>
     <Footer/>
           {/* <Link to='/about' className='btn'>
        About
      </Link> */}
    </>
  );
};
export default Home;