import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const NotesProvider = (props) => {

    const [title, setTitle] = useState(""); //state for note title
    const [inputNote, setInputNote] = useState(""); //state for user note
    const [notes, setNotes] = useState([]); // state to have all the notes (notes array)
    const [pinNotes, setPinNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);

    return (
        <NotesContext.Provider value={{ title, setTitle, inputNote, setInputNote, notes, setNotes, pinNotes, setPinNotes, archiveNotes, setArchiveNotes }}>
            {props.children}
        </NotesContext.Provider>
    )
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };