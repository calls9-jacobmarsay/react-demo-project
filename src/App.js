import { Route, Routes, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import CreateQuote from "./pages/CreateQuote";
import QuoteDetails from "./pages/QuoteDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quotes" replace />}></Route>
      <Route path="/quotes" element={<AllQuotes />}></Route>
      <Route path="quotes/:quoteId" element={<QuoteDetails />}></Route>
      <Route path="quotes/create" element={<CreateQuote />}></Route>
    </Routes>
  );
}

export default App;
