import './App.css';
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

/**
 * public
 *  -- index.html
 * src
 *  -- components
 *    -- Header //folder
 *        -- Header.jsx
 *        -- Header.css
 *    -- Sidebar
 *        -- Sidebar.jsx
 *        -- Sidebar.css
 *    -- InputNotes
 *        -- InputNotes.jsx
 *        -- InputNotes.css
 *  -- App.js
 *  -- App.css
 *  -- pages
 *      -- Home
 *         -- Home.js
 *         -- Home.css
 *  -- context
 *      -- notes-context
 *  
 *  -- index.js
 */
