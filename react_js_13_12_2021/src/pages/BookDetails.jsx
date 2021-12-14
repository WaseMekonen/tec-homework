import React from "react";

export default function BookDetails({ author, title, summary }) {
  return (
    <div>
      <div>
        <h1>Book Details</h1>
      </div>
      <h2>{author}</h2>
      <h2>{title}</h2>
      <h3>{summary}</h3>
    </div>
  );
}
