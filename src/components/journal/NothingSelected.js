import React from "react";

export const NothingSelected = () => {
  return (
    <div className="journal-main__nothing">
      <div className="journal-main__nothing-container">
        <p>
          Selecciona una nota!
          <br />
          o podrías crea una nueva?
        </p>
        <i className="far fa-star fa-4x" />
      </div>
    </div>
  );
};
