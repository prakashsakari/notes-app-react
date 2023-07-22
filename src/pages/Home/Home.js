import { Header, InputNotes, NoteCard } from "../../components";
import { useNotes } from "../../context/notes-context";

export const Home = () => {

    const state = useNotes();

    const { notes, pinNotes } = state;

    return <>
        <Header />
        <InputNotes />
        {/* Pinned Notes */}
        <div>
            {
                pinNotes.length > 0 && <h3>Pinned Notes</h3>
            }
            <div className="d-flex gap wrap">  
                {
                    pinNotes.map(note => <NoteCard key={note.id} note={note} />)
                }
            </div>
        </div>
        {/* Unpinned Notes */}
        <div>
            {
                notes.length > 0  && <h3>Other Notes</h3>
            }
            <div className="d-flex gap wrap">
                
                {
                    notes.map(note => <NoteCard key={note.id} note={note} />)
                }
            </div>
        </div>
        
    </>
}

/**
 * --components
 *  -- Header
 *    -- Header.jsx
 * -- pages
 *  -- Home
 *    -- Home.js
 */