import { render } from "@testing-library/react";
import RatingStars, { __TEST_IDS__ } from "../components/RatingStars";

describe("RatingStars", () => {
  it("returns null when rating is not provided", () => {
    const { container } = render(<RatingStars />);
    expect(container.children.length).toBe(0);
  });
  it("returns null when rating is 0", () => {
    const { container } = render(<RatingStars rating={0} />);
    expect(container.children.length).toBe(0);
  });
  it("hides empty stars when showEmptyStars is false", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={1.5} showEmptyStars={false} />
    );
    expect(getByLabelText("1.5 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(0);
  });
  it("returns 8 full stars, 1 half stars, and 1 empty stars when rating is 8.5 out of 10", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={8.5} maxRating={10} />
    );
    expect(getByLabelText("8.5 out of 10 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(8);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(1);
  });
  it("returns 1 half star and 4 empty stars when rating is 0.5", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={0.5} />
    );
    expect(getByLabelText("0.5 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(0);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(4);
  });
  it("returns 1 full star and 4 empty stars when rating is 1", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={1} />
    );
    expect(getByLabelText("1 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(0);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(4);
  });
  it("returns 1 full star, 1 half star, and 3 empty stars when rating is 1.25", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={1.25} />
    );
    expect(getByLabelText("1.25 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(3);
  });
  it("returns 1 full star, 1 half star, and 3 empty stars when rating is 1.5", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={1.5} />
    );
    expect(getByLabelText("1.5 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(3);
  });
  it("returns 3 full stars, 1 half star, and 1 empty stars when rating is 3.5", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={3.5} />
    );
    expect(getByLabelText("3.5 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(3);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(1);
  });
  it("returns 4 full stars, 0 half stars, and 1 empty stars when rating is 4", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={4} />
    );
    expect(getByLabelText("4 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(4);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(0);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(1);
  });
  it("returns 4 full stars, 1 half stars, and 0 empty stars when rating is 4.5", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={4.5} />
    );
    expect(getByLabelText("4.5 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(4);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(1);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(0);
  });
  it("returns 5 full stars, 0 half stars, and 0 empty stars when rating is 5", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={5} />
    );
    expect(getByLabelText("5 out of 5 stars")).toBeInTheDocument();
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(5);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(0);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(0);
  });
  it("returns 5 full stars, 0 half stars, and 0 empty stars when rating is greater than 5", () => {
    const { getByLabelText, queryAllByTestId } = render(
      <RatingStars rating={6} />
    );
    expect(getByLabelText("5 out of 5 stars")).toBeInTheDocument(); // Note that rating gets maxed to maxRating
    expect(queryAllByTestId(__TEST_IDS__.FILLED_STAR).length).toBe(5);
    expect(queryAllByTestId(__TEST_IDS__.HALF_STAR).length).toBe(0);
    expect(queryAllByTestId(__TEST_IDS__.EMPTY_STAR).length).toBe(0);
  });
});
