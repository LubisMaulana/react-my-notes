import React from "react";
import NoteBody from "./NoteBody";
import NoteButton from "./noteButton";

const NoteCard = ({ mynote, onClickDeleteHandler, onClickToArsipHandler }) => {
  return (
    <div className="note-card">
      <NoteBody mynote={mynote} />
      <NoteButton
        onClickDeleteHandler={onClickDeleteHandler}
        onClickToArsipHandler={onClickToArsipHandler}
        isArchive={mynote.archived}
        id = {mynote.id}
      />
    </div>
  );
};

export default NoteCard;