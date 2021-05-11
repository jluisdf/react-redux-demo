import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Listado from './components/Listado'

function App() {

    const store = generateStore()

    return (
        <Provider store={store}>
            <h2>Hola mundo</h2>
            <Listado />
        </Provider>
  );
}

export default App;
