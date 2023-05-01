import React from "react";

const PdfModal = ({ src, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <object data={src} type="application/pdf" width="100%" height="100%">
          <p>Sorry, your browser doesn't support embedded PDFs.</p>
        </object>
      </div>
    </div>
  );
};

export default PdfModal;
