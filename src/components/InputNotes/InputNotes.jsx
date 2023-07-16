import './InputNotes.css';

export const InputNotes = () => {
    return (
        <div className="d-flex flex-column input-note">
            <input placeholder="Enter a Title" />
            <textarea placeholder="Enter a Note" />
        </div>
    )
}