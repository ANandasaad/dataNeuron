import "./App.css";
import Side from "./components/Side";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./utils/appStore";
import Split from "@uiw/react-split";

function App() {
  return (
    <Provider store={store}>
      <div className="public-container">
        <div className="grid grid-cols-12 gap-3 py-3 ">
          <Split className="col-span-12 w-screen">
            <div className="col-span-4 bg-white">
              <Side />
            </div>

            <div className="col-span-8 bg-white shadow-2xl rounded-xl">
              <Main />
            </div>
          </Split>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
