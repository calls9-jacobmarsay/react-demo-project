import { useParams, Routes, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
      <Routes>
        <Route path={`/comments`} element={<Comments />}></Route>
      </Routes>
    </div>
  );
};

export default QuoteDetails;
