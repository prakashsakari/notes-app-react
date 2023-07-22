import "./NoteCard.css";
import { useNotes } from "../../context/notes-context";

export const NoteCard = (props) => {

    const state = useNotes();
    const { notes, setNotes, setPinNotes, pinNotes, archiveNotes, setArchiveNotes } = state;

    const { note } = props;

    const { id, title, inputNote} = note;

    const findIsNotePinned = (notes, id) => {
        return notes.some(note => note.id === id)
    }
    
    // checking if note is inside pin Notes Array
    const isNotePinned = findIsNotePinned(pinNotes, id);

    const findIsNoteArchived = (notes, id) => {
        return notes.some(note => note.id === id);
    }

    const isNoteArchived = findIsNoteArchived(archiveNotes, id);

    const onDeleteClick = (id) => {
        const fiteredArr = notes.filter(note => note.id !== id);
        setNotes(fiteredArr);
    }

    const onPinClick = (id) => {
        const filteredArr = notes.filter(note => note.id !== id); // remove from other notes
        setNotes(filteredArr);
        setPinNotes([...pinNotes, {id, title, inputNote}]) //adding to pin notes
    }

    const onUnpinClick = (id) => {
        const filteredArr = pinNotes.filter(note => note.id !== id); // remove from pin notes
        setPinNotes(filteredArr);
        setNotes([...notes, {id, title, inputNote}]) //adding to unpin notes
    }

    const onArchiveClick = (id) => {
        if (isNotePinned){
            const filteredArr = pinNotes.filter(note => note.id !== id) // remove from pin notes
            setPinNotes(filteredArr);
        } else {
            const filteredArr = notes.filter(note => note.id !== id); // remove from other notes
            setNotes(filteredArr);
        }
        setArchiveNotes([...archiveNotes, {id, title, inputNote}]) //adding to archive notes
    }

    return (
        <div className="notes-container">
            <div className="title d-flex space-between align-center">
                <p>{title}</p>
                {
                    !isNoteArchived && <button onClick={isNotePinned ? () => onUnpinClick(id) : () => onPinClick(id)}>
                    { isNotePinned ? "Unpin" : "Pin" }
                    </button>
                }
                
            </div>
            <div className="notes">
                <p>{inputNote}</p>
                <div>
                    <button onClick={() => onArchiveClick(id)}>
                        {isNoteArchived ? 'UnArchive' : 'Archive'}
                    </button>
                    <button onClick={() => onDeleteClick(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}