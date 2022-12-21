import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
    </div>
  );
};

export default QuoteDetails;
