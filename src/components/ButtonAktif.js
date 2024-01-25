// Sarif Hidayatullah
import React from "react";

function ActiveButton({ id, onActive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onActive(id)}>
      Kembalikan
    </button>
  );
}

export default ActiveButton;
