import { Fragment } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { DUMMY_DATA } from "../data/DummyData";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import React from "react";
const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
        <Route
          path="*"
          element={
            <div className="centered">
              <Link
                className="btn--flat"
                to={`/quotes/${params.quoteId}/comments`}
              >
                Load Comments
              </Link>
            </div>
          }
        />
      </Routes>
    </Fragment>
  );
};
export default QuoteDetails;
