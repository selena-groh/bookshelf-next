import books from "@/data/books";
import "./BookList.scss";
import { getSeriesWithNumber } from "@/utils/data-processing";
import RatingStars from "@/components/RatingStars";

const BookList = () => {
  return (
    <div>
      <h3>All Books</h3>
      <table className="BookList">
        <thead>
          <tr>
            <th align="left" style={{ width: "30%" }}>
              <h4>Title</h4>
            </th>
            <th align="left">
              <h4>Series</h4>
            </th>
            <th align="left">
              <h4>Author</h4>
            </th>
            <th align="right">
              <h4>Pages</h4>
            </th>
            <th align="left">
              <h4>Rating</h4>
            </th>
            <th align="right">
              <h4>Date Finished</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const dateFinished = new Date(book.dateFinished);
            const printableDateFinished = dateFinished.toLocaleDateString(
              "default",
              { month: "short", day: "numeric", year: "numeric" }
            );
            return (
              <tr key={book.bookId}>
                <td>
                  <a href={book.goodreadsUrl} target="__blank">
                    {book.title}
                  </a>
                </td>
                <td>{getSeriesWithNumber(book)}</td>
                <td>{book.author}</td>
                <td align="right">{book.numberOfPages}</td>
                <td>
                  <RatingStars
                    rating={book.rating}
                    maxRating={5}
                    showEmptyStars={false}
                  />
                </td>
                <td align="right">
                  <span
                    style={{
                      display: "inline-block",
                      // Max width needed for date
                      width: "88px",
                    }}
                  >
                    {book.dateFinished ? printableDateFinished : ""}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
