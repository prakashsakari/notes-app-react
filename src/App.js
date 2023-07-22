import './App.css';
import { Home } from "./pages/Home/Home";
import { Archive } from './pages/Archive/Archive';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/archive' element={<Archive />} />
    </Routes>
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
