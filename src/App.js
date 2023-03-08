import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";
//
import { Provider } from "react-redux";
import store from "./store";
import FooterBar from "./components/FooterBar";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* Navbar */}
        <AppNavbar />

        {/* Body */}
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
        {/* Body */}

        {/* Footer */}
        <FooterBar />
      </div>
    </Provider>
  );
}

export default App;
