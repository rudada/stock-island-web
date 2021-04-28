import React from "react";
import "./ArticleList.scss";

function Article({ title, url, date }) {
  return (
    <tr className="article"><a href={url}>
      <td width="70%">
         {title}
      </td>
      <td width="30%">{date}</td>
      </a>
    </tr>
  );
}
function ArticleList({ keyword, articles }) {
  return (
    <div className="ArticleList">
      <div className="keyword">{keyword}</div>
      <div className="articles">
        <table>
          <tbody>
            {articles.map((row, key) => (
              <Article
                key={key}
                title={row.title}
                url={row.url}
                date={row.date}
              ></Article>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArticleList;
