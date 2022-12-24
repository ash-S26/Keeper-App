import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNote] = useState([]);

  function addNewNote(note) {
    //console.log(note);
    addNote((prevValues) => {
      //console.log(note);
      return [...prevValues, note];
    });
  }
  // Two ways - prevValues (thsis is a sort of default argument which holds array of previous values) or directly use can directly use notes.
  // prevValues is helpfull when we require refrence for previous values.
  function deleteNote(deleteTitle) {
    addNote(() => {
      return notes.filter((item) => {
        return item.title !== deleteTitle;
      });
    });
  }
  // deleteNote function is passes as property to Note custom tag which attaches this function
  // will all buttons which are meant to delete note
  return (
    <div>
      <Header />
      <CreateArea addnote={addNewNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            title={item.title}
            content={item.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
