import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Resturant from './components/Resturant/Resturant';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/resturant' element={<Resturant></Resturant>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/meal/:name' element={<MealDetail></MealDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
