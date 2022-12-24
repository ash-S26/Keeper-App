import React, { useState } from "react";

function CreateArea(props) {
  const [note, updateNote] = useState({
    title: "",
    content: ""
  });

  function update(event) {
    var name = event.target.name;
    var value = event.target.value;
    updateNote(() => {
      return {
        ...note,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={update}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={update}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            props.addnote(note);
            updateNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
