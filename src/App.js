import { Route, Routes, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import CreateQuote from "./pages/CreateQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" replace />}></Route>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="quotes/:quoteId/*" element={<QuoteDetails />}></Route>
        <Route path="quotes/create" element={<CreateQuote />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
