import BookStats from "./BookStats";
import BookList from "./BookList";

const Page = () => {
  return (
    <div style={{ maxWidth: "960px", margin: "0px auto" }}>
      <BookStats />
      <BookList />
    </div>
  );
};

export default Page;
