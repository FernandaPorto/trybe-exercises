import './App.css';
import taskList from './components/List'
import task from './components/TaskMaker'

function App() {
  return   taskList.map((item) => task(item))
}

export default App;
