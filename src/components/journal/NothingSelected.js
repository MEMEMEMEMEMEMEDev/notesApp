import React from "react";

export const NothingSelected = () => {
  return (
    <div className="journal-main__nothing">
      <div className="journal-main__nothing-container">
        <p>
          Select something
          <br />
          or create an entry
        </p>
        <i className="far fa-star fa-4x" />
      </div>
    </div>
  );
};
