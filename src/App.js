import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <route path="/quotes" element={ }/>
      <route path="/quotes/:quoteId" element={ }/>
      <route path="/new-quote" element={ }/>
    </Routes>
  );
}

export default App;
