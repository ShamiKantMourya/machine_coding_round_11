import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import LandingPage from "./Page/LandingPage/LandingPage";
import WatchList from "./Page/WatchList/WatchList";
import Starred from "./Page/Starred/Starred";
import MovieDetail from "./Components/Movie/MovieDetail";
import PageNotFound from "./Page/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Toaster 
       position="bottom-right"
       reverseOrder={false}
       containerStyle={{
         top: "4rem",
       }}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
