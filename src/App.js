import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ExperienceSection from './components/Experience/ExperienceSection';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>Hello, I'm Ayomide</h1>
      <p>Welcome to my portfolio site.</p>
      <ExperienceSection />
    </div>
  );
}

export default App;
