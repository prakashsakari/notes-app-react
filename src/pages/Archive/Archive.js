import { Header, NoteCard } from '../../components';
import { useNotes } from "../../context/notes-context";

export const Archive = () => {

    const state = useNotes();

    const { archiveNotes } = state;

    return (
        <>
            <Header />
            <h3>Archive Notes</h3>
            <div className='d-flex gap wrap'>
                {
                    archiveNotes.map(note => <NoteCard key={note.id} note={note} />)
                }
            </div>
        </>
        
    )
}