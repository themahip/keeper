import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./components/Notes";

function App() {
  return (
<div>
<Footer />
<Header />
{
  notes.map((noteItem=>
    
      <Note 
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
      />)
)
}
</div>
  );
}

export default App;
