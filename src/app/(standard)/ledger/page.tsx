import Stats from "./Stats";
import Ledger from "./BookList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ledger",
};

const Page = () => {
  return (
    <div style={{ maxWidth: "960px", margin: "0px auto" }}>
      <Stats />
      <Ledger />
    </div>
  );
};

export default Page;
