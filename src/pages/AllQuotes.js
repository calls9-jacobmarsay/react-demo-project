import { DUMMY_DATA } from "../data/DummyData";
import QuoteList from "../components/quotes/QuoteList";
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
