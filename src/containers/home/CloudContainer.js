import React, { Component, useEffect, useState, useCallback } from "react";
import { getWordcloud } from "../../lib/api/home";
import ArticleModalContainer from "../common/ArticleModalContainer.js";
import WordCloud from "../../components/home/WordCloud.js";

function CloudContainer() {
  const [words, setWords] = useState([]);
  const [selectedKeyword, setKeyword] = useState("");
  const [isModalOpen, setModal] = useState(false);

  useEffect(async () => {
    const data = await getWordcloud()
      .then((res) => res.data.body.data.data)

    const words = data.map((row) => ({
      text: row["NAMED_ENTITY"],
      value: row["NAMED_ENTITY_COUNT"],
    }));
    setWords(words);
  }, []);

  const onClick = useCallback((e) => {
    if (e.target.nodeName != "text") return;
    setKeyword(e.target.textContent);
    changeModal();
  });

  const changeModal = useCallback(() => {
    setModal(!isModalOpen);
  });

  return (
    <div>
      <ArticleModalContainer
        keyword={selectedKeyword}
        isOpen={isModalOpen}
        changeModal={() => changeModal()}
      ></ArticleModalContainer>

      <WordCloud
        words={words}
        onClick={(e) => onClick(e)}
      ></WordCloud>
    </div>
  );
}

export default CloudContainer;