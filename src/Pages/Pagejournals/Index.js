import React from "react";
import Contentjournalbanner from "../../Components/Contentjournalbanner/Index";
import Contentjournallist from "../../Components/Contentjournallist/Index";
import Pagejournal from "../../Pagejournal/Index";

const Pagejournals = () => {
  return (
    <>
      <Pagejournal />
      <Contentjournalbanner />
      <Contentjournallist />
    </>
  );
};

export default Pagejournals;
