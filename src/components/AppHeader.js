// Sarif Hidayatullah
import React from "react";
import NoteSearch from "./NoteSearch";

function Header({ searchNote }) {
  return (
    <div className="note-app__header">
      <h1>SARIF HIDAYATULLAH</h1>
      <NoteSearch searchNote={searchNote} />
    </div>
  );
}

export default Header;
