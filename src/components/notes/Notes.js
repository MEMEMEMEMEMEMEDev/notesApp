import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm/useForm";
import { activeNote, startDeleting } from "../../reducers/actions/notes";

export const Notes = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes">
      <div className="notes-content">
        <input
          type="text"
          placeholder="Titulo de la nota..."
          className="notes-content__title"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
          name="title"
          maxLength={50}
        />
        <textarea
          placeholder="Descripción de la nota..."
          className="notes-content__textarea"
          value={body}
          onChange={handleInputChange}
          name="body"
          maxLength={500}
        />
      </div>

      <button className="notes-btndelete" onClick={handleDelete}>
        <i className="fa-solid fa-trash-can" />
      </button>
    </div>
  );
};
