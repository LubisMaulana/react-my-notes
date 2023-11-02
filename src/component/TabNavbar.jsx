import React from "react";

const TabNavbar = ({onClickToNoteListHandler, onClickToArsipListHandler}) => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap:"20px"}}>
            <li className="nav-item" onClick={onClickToNoteListHandler}>
                <a className="nav-link" aria-current="page">Catatan Aktif</a>
            </li>
            <li className="nav-item" onClick={onClickToArsipListHandler}>
                <a className="nav-link">Arsip Catatan</a>
            </li>
        </ul>
    );
}

export default TabNavbar;
