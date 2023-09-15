import { useSelector } from 'react-redux';
import CreateUser from '../featchers/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="my-10 px-4 text-center ">
      <h1 className="mb-8 text-xl font-semibold text-stone-800 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue oredring {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
