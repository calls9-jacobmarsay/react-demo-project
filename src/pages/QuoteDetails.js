import { useParams, Routes, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { DUMMY_DATA } from "../data/DummyData";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  //Check if quote exists
  if (!quote) {
    return <h2>Quote Not Found!</h2>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path={`/comments`} element={<Comments />}></Route>
      </Routes>
    </div>
  );
};

export default QuoteDetails;
