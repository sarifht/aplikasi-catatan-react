// Sarif Hidayatullah
import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 40,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.maxChar),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Tersisa: {this.state.maxChar - this.state.title.length} huruf</p>
          <input className="note-input__title" type="text" placeholder="Masukkan judul catatan..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea className="note-input__body" type="text" placeholder="Ceritakan tentang catatan ini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
          <button type="submit">Simpan Catatan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
