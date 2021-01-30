import './App.css';
import store from './store'
import { Main } from './layout/main/Main'
import { SideBar } from './layout/sidebar/SideBar'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
