import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/about' className='btn'>
        About
      </Link>
    </div>
  );
};
export default Home;