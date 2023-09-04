import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage, Home } from './pages';
import { Footer, Navbar } from './components';

const App = () => {
  return (
    <main className='w-full h-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
