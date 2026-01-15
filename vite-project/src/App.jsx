import friends from './data/friend.json';
import FriendList from './components/FriendList/FriendList';
import data from './data/data.json';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <>
    <FriendList friends={friends} />
    <Statistics
      title="Upload stats"
      stats={data}/>
    </>
  );
}

export default App;
