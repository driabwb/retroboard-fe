import React, { ChangeEvent, MouseEvent, Fragment, useState } from 'react';

interface editableTextControlProps {
  onSave: (data: string) => void;
  text: string;
};

function EditableTextControl({onSave, text}: editableTextControlProps) {
  const [ isEditing, setEditing ] = useState(false);
  const [ editingText, setEditingText ] = useState(text);

  const clearEditingText = () => {
    setEditingText(text);
    setEditing(false);
  };
  const saveEditingText = (event: MouseEvent<HTMLButtonElement>) => {
    onSave(editingText);
    setEditing(false);
  };

  const updateEditingText = (event: ChangeEvent<HTMLInputElement>) => {
    setEditingText(event.target.value);
  }


  if (!isEditing) {
    return (
      <Fragment>
        {text}
        <button onClick={()=>setEditing(true)}>Edit</button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <input type="text" value={editingText} onChange={updateEditingText} />
        <span>
          <button onClick={clearEditingText}>Cancel</button>
          <button onClick={saveEditingText}>Save</button>
        </span>
      </Fragment>
    );
  }
}

export default EditableTextControl;
