import React from "react";
import Navbar from './Navbar.jsx';
import {getData} from "../utils/data.js";
import NoteContainer from "./NoteContainer.jsx";
import AddForm from "./AddForm.jsx";
import "../css/App.css";

class MainApp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      allnotes : getData(),
      mynotes : getData().filter((note) => {
        return !note.archived;
      }),
      arsipnotes : getData().filter((note) => {
        return note.archived;
      }),
    }

    this.searchItem = this.searchItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onClickDeleteHandler = this.onClickDeleteHandler.bind(this);
    this.onClickToArsipHandler = this.onClickToArsipHandler.bind(this);
    this.renderItemNotes = this.renderItemNotes.bind(this);
    this.toAddFormHandler = this.toAddFormHandler.bind(this);
  }

  toAddFormHandler(){
    document.querySelector('.not-arsip-container').style.display = "none";
    document.querySelector('.arsip-container').style.display = "none";
    document.querySelector('.add-form').style.display = "flex";
  }

  renderItemNotes(){
    this.setState((item) => {
      return{
        mynotes : item.allnotes.filter((note) => {
          return !note.archived;
        }),
        arsipnotes : item.allnotes.filter((note) => {
          return note.archived;
        }),
      }
    })
  }

  onClickToArsipHandler(id, isArchive){
    this.setState((item)=> {
      return {
        allnotes : item.allnotes.map((note) => {
          if (note.id === id){
            return {
              ...note,
              archived : !isArchive,
            };
          }
          return note;
        })
      };
    });
    this.renderItemNotes();
  }

  onClickDeleteHandler(id){
    const mynotes = this.state.allnotes.filter((note) => { return note.id !== id});
    this.setState({allnotes : mynotes})
    this.renderItemNotes();
  }

  addItem(titleInput, isiInput){
    this.setState((prevItem) => {
      return{
        allnotes: [
          ...prevItem.allnotes,
          {
            archived : false,
            body : isiInput,
            createdAt : new Date().toISOString(),
            id : +new Date(),
            title :titleInput
          }
        ]
      }
    });
    this.renderItemNotes();
  }

  searchItem(keywordSearch){
    const keyword = keywordSearch.toLowerCase()
    this.setState((item) => {
      return {
        mynotes: item.allnotes.filter((note) => {
          const title = note.title.toLowerCase();
          return title.includes(keyword) && !note.archived;
        }),
        arsipnotes: item.allnotes.filter((note) => {
          const title = note.title.toLowerCase();
          return title.includes(keyword) && note.archived;
        })
      };
    });
  }

  render(){
    return (
      <div className="mynote-apps">
        <Navbar searchItem={this.searchItem}/>
        
        <AddForm addItem={this.addItem}/>
        <div className="not-arsip-container">
          <h1 className="title-arsip">Catatan Aktif</h1>
          <NoteContainer 
            mynotes={this.state.mynotes}
            onClickDeleteHandler={this.onClickDeleteHandler}
            onClickToArsipHandler={this.onClickToArsipHandler}
          />
        </div>

        <div className="arsip-container">
          <h1 className="title-arsip">Arsip</h1>
          <NoteContainer mynotes={this.state.arsipnotes}
            onClickDeleteHandler={this.onClickDeleteHandler}
            onClickToArsipHandler={this.onClickToArsipHandler}
          />
        </div>

        <button onClick={this.toAddFormHandler} className="tambah-button">
          <p className="icon-tambah fa">&#xf067;</p>
        </button>
      </div>
    );
  }
}

export default MainApp;