import React from "react";

const NoteButton = ({onClickDeleteHandler, onClickToArsipHandler, isArchive, id}) => {
    return(
        <div className="note-button">
            <button className="delete-button" onClick={() => onClickDeleteHandler(id)}>
                <p>Delete</p>
            </button>
            <button className="arsip-button" onClick={() => onClickToArsipHandler(id, isArchive)}>
                {isArchive ? <p>Pindahkan</p> : <p>Arsip</p>}
            </button>
        </div>
    );
}

export default NoteButton;