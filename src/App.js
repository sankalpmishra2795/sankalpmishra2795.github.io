import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MyRoutes from './routes/Router';

function App() {
  return (
    <Provider store={store}>
      <MyRoutes />
    </Provider>
  );
}

export default App;
