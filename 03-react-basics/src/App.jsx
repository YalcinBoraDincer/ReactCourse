import Header from './components/Header';
import ProductList from './components/ProductList';
export default function App() {
    return (
      <div>
        <Header />
        <div className='container mt-3'>
        <ProductList />
        </div>
        
      </div>
    );
  }