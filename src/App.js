import './App.css';
import { CardBCollection, NavBar, MarketingFooter } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"} />
      <CardBCollection isPaginated itemsPerPage={3}/>
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
