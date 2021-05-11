import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Listado from './components/Listado'
import Ejemplo from './components/Ejemplo'
import Recipes from './components/Recipes'
import store from './redux/store'

function App() {

    // const store = generateStore()

    return (
        <Provider store={store}>
            {/* <Listado /> */}
            <Ejemplo />
            <hr />
            <Recipes />
        </Provider>
  );
}

export default App;
