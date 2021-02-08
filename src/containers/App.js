import './App.css';
import store from '../store';
import Main  from '../components/main/Main';
import SideBar from '../components/sidebar/SideBar';
import _ from 'lodash';

function App() {
  const {contacts, user, activeUserId} = store.getState();
  return (
    <div className="App">
      <SideBar contacts={_.values(contacts)} key={_.keys(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
