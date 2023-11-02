import React from "react";

const convertToLocaleDate = (createdAt) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString('id-ID', options);

    return formattedDate;
}

const NoteBody = ({mynote}) => {
    return (
        <div className="note-body">
            <h1 className="title-note">{mynote.title}</h1>
            <p className="date-note">{convertToLocaleDate(mynote.createdAt)}</p>
            <p className="isi-note">{mynote.body}</p>
        </div>
    );
}

export default NoteBody;