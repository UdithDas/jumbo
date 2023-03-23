
import './App.css';
import Read from './components/Read';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Navbar from './components/Navbar';
import Teachers from './components/Teachers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Read></Read>}> </Route>
        <Route path='/students' element={<Read></Read>}></Route>
        <Route path='/addstudents' element={<Addstudent data={{id:'',name:'',grade:''}} method="post"></Addstudent>}></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Addstudent/> */}
      {/* <Teachers/> */}
      {/* <Read/> */}
    </div>
  );
}

export default App;
