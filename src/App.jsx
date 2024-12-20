
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <Router>
      <nav >
        <Link to="/">Todo List</Link>
        <Link to="/employees">Employee List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
