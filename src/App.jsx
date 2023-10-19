import "./App.css";
import Title from "./components/Title.jsx";
import Todo from "./components/Todo.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step."
        />
        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next six weeks."
        />
        <Todo title="Land a $100k Job" paragraph="Apply to 100 jobs." />
      </div>
      <Modal modalTitle="Are you sure?"/>
    </div>
  );
}

export default App;
