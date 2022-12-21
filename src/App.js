import { Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import CreateQuote from "./pages/CreateQuote";
import QuoteDetails from "./pages/QuoteDetails";
function App() {
  return (
    <Routes>
      <Route path="/quotes" element={<AllQuotes />}></Route>
      <Route path="quotes/:quoteID" element={<QuoteDetails />}></Route>
      <Route path="quotes/create" element={<CreateQuote />}></Route>
    </Routes>
  );
}

export default App;
