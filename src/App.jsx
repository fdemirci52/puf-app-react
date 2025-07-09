import Header from './components/Header/Header';
import HeaderPreview from './components/Header/HeaderPreview';
import Header2 from './components/Header/Header2'; 
import WorldAppTop from './components/WorldAppTop';
import TokenHeader from './components/Token/TokenHeader';   

function App() {
  return (
    <div>
      <TokenHeader />
      <WorldAppTop />
      <Header />
      <Header2 />
      <HeaderPreview />
    </div>
  );
}

export default App;
