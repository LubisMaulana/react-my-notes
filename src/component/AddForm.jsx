import React from "react";

class AddForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            maxTitle : 50,
            sisaTitle: 50,
            title : '',
            isi : ''
        };

        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeIsiHandler = this.onChangeIsiHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeTitleHandler(event){
        const title = event.target.value;
        if (title.length <= this.state.maxTitle) {
            this.setState({
                title: title,
                sisaTitle: this.state.maxTitle - title.length
            });
        }
    }

    onChangeIsiHandler(event){
        this.setState({
            isi : event.target.value,
        });
    }

    onSubmitHandler(event){
        event.preventDefault();

        this.props.addItem(this.state.title, this.state.isi);
        document.querySelector(".add-form").style.display = "none";
        document.querySelector(".not-arsip-container").style.display = "flex";

        this.setState({
            maxTitle : 50,
            sisaTitle: 50,
            title : '',
            isi : ''
        });
    }

    render(){
        return(
            <form className="add-form" id="note-form">
                <h1 className="title-add">Buat Catatan</h1>
                <div className="length-title">
                    <p>Sisa karakter: {this.state.sisaTitle}</p>
                </div>
                <input onChange={this.onChangeTitleHandler} value={this.state.title} type="text" className="input-title" placeholder="Isi judul..." />
                <textarea onChange={this.onChangeIsiHandler} value={this.state.isi} className="input-isi" placeholder="Tuliskan catatanmu..." rows="8"></textarea>
                <button onClick={this.onSubmitHandler} type="submit" className="btn-addform"><p>Buat</p></button>
            </form>
        );
    }
}

export default AddForm;