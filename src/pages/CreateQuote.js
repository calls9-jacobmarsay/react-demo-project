import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
const CreateQuote = () => {
  const navigate = useNavigate();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    navigate("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default CreateQuote;
