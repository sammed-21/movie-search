import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Add from "./components/Add";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import { GlobalProvider} from "./context/GlobalState"
function App() {
  return (
    <GlobalProvider>

    <Router>
      <Header />

      <Routes>
        {/* V5.1 version of router dom */}
        {/* <Route exact path="/">
          <WatchList />
        </Route> */}
        <Route path="/" element={<WatchList />} />

        <Route path="/watched" element={<Watched />} />

        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
        </GlobalProvider>
  );
}

export default App;
