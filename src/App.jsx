import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Footer, Navbar } from './components';

const App = () => {
  return (
    <main className='w-full h-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
