import QuoteForm from "../components/quotes/QuoteForm";
const CreateQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default CreateQuote;
