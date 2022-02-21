import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./reducers/store/store";


export const App = () => {
  return(
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}