// Sarif Hidayatullah
import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Belum ada catatan.</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
      ))}
    </div>
  );
}

export default NotesList;
