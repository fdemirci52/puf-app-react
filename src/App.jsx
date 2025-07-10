import Header from './components/Header/Header';
import HeaderPreview from './components/Header/HeaderPreview';
import Header2 from './components/Header/Header2'; 
import WorldAppTop from './components/WorldAppTop';
import TokenHeader from './components/Token/TokenHeader';   
import ScaledWrapper from './components/ScaledWrapper';

function App() {
  return (
    <div>
      <TokenHeader />
      <HeaderPreview />
      <WorldAppTop />
      <Header />
    </div>
  );
}

export default App;
