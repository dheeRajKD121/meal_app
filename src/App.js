import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Landing from "./component/Landing";
import Ingredients from "./component/Ingredients";
import AreaMeal from "./component/AreaMeal";
import CategoryMeal from "./component/CategoryMeal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/areameal" element={<AreaMeal />} />
        <Route path="/food_by_category/:name" element={<CategoryMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
