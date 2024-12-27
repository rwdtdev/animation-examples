import { Link } from 'react-router';

function HomePage() {
  return (
    <>
      <h1 className='text-3xl font-bold'>HomePage</h1>

      <Link to='/tabs' className=''>
        Messages
      </Link>
    </>
  );
}

export default HomePage;
