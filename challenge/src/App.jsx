import { useState } from "react";
import Pg from "./pages/Page1";
import Pg2 from "./pages/Page2";
import Pg3 from "./pages/Page3";

function App() {
  const [currentPage, setCurrentPage] = useState("pg");

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const pageMap = {
    pg: <Pg changePage={changePage} />,
    pg2: <Pg2 changePage={changePage} />,
    pg3: <Pg3 changePage={changePage} />,
  };

  return <div>{pageMap[currentPage]}</div>;
}

export default App;
