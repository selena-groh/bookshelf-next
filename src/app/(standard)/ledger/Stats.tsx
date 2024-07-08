import books from "@/data/books";

const Stats = () => {
  const totalPages = books.reduce(
    (runningSum, book) => runningSum + Number(book.numberOfPages),
    0
  );

  return (
    <div>
      <h3>
        Total number of pages:{" "}
        {totalPages.toLocaleString("default", { minimumFractionDigits: 0 })}
      </h3>
      <h3>Total number of Books: {books.length}</h3>
    </div>
  );
};

export default Stats;
