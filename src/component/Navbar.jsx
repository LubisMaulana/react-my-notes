import React from "react";
import TabNavbar from "./TabNavbar";

class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search : '',
        }

        this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this);
        this.onClickToArsipListHandler = this.onClickToArsipListHandler.bind(this);
        this.onClickToNoteListHandler = this.onClickToNoteListHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onClickToArsipListHandler(){
        const listArsip = document.querySelector(".arsip-container");
        const listNotArsip = document.querySelector(".not-arsip-container");
        document.querySelector('.add-form').style.display = "none";

        listArsip.style.display ="flex";
        listNotArsip.style.display ="none";
    }

    onClickToNoteListHandler(){
        const listArsip = document.querySelector(".arsip-container");
        const listNotArsip = document.querySelector(".not-arsip-container");
        document.querySelector('.add-form').style.display = "none";

        listArsip.style.display ="none";
        listNotArsip.style.display ="flex";
    }

    onChangeSearchHandler(event){
        this.setState({
            search : event.target.value,
        });
    }

    onSubmitHandler(event){
        event.preventDefault();

        this.props.searchItem(this.state.search);
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Notes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <TabNavbar onClickToArsipListHandler={this.onClickToArsipListHandler} onClickToNoteListHandler={this.onClickToNoteListHandler}/>
                        <form className="d-flex" role="search">
                            <input onChange={this.onChangeSearchHandler} value={this.state.search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={this.onSubmitHandler} className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;