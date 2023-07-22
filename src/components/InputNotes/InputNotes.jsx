import './InputNotes.css';
import { useNotes } from "../../context/notes-context";
import { v4 as uuid } from "uuid";

export const InputNotes = () => {

    const state = useNotes();
    
    const { title, setTitle, inputNote, setInputNote, notes, setNotes } = state;

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onNotesChange = (e) => {
        setInputNote(e.target.value)
    }

    const onAddNoteClick = () => {
        setNotes([...notes, { id: uuid(), title, inputNote}])
    }

    return (
        <div className="d-flex flex-column input-note">
            <input value={title} onChange={onTitleChange} placeholder="Enter a Title" />
            <textarea value={inputNote} onChange={onNotesChange} placeholder="Enter a Note" />
            <button onClick={onAddNoteClick}>Add</button>
        </div>
    )
}