import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Textifier" aboutText="About us" />
    <div class="container">
    <TextForm heading="Enter the text to modify :" />
    </div>
    </>
  );
}

export default App;
