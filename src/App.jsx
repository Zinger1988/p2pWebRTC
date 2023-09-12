import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Room, NotFound404 } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/room/:id' element={<Room />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
