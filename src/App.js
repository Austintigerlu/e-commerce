import { Container } from 'react-bootstrap'
import {Routes, Route} from 'react-router-dom'
// Components
import Footer from './components/Footer';
import Header from './components/Header'
// Pages
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <div>
      <Header/>
      <main className='py-3'>
        <Container>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/product/:id' element={<ProductPage/>}/>
        </Routes>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
