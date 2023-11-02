import React from "react";
import NoteCard from "./NoteCard";


const NoteContainer = ({mynotes, onClickDeleteHandler, onClickToArsipHandler}) => {
    return(
        <div className="note-container">
            {mynotes.map((mynote) => {
                return (
                    <NoteCard
                        key={mynote.id}
                        mynote={mynote}
                        onClickDeleteHandler={onClickDeleteHandler} 
                        onClickToArsipHandler={onClickToArsipHandler} 
                    />
                );
            })}
        </div>
    );
}

export default NoteContainer;