import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
import './index.css'

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")


  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div style={{textAlign:"center",width:'100%',height:'50%',alignItems:'center'}} className="App">

      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br>
          </br>
          <button
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </button>

        </div>

        <div style={{textAlign:"center",backgroundColor:"lightgreen",borderRadius:10}}className="list">

          {toDo.map((item) => 
          <ToDo className="ok"
          key={item._id}
          text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)} 
          />
          )}

        </div>

      </div>

    </div>
  );
}

export default App;