import { useState } from "react";
import "./App.css";
import KillComponent from "./components/KillComponent";
import Reddit from "./components/Reddit";
import RedditJs from "./components/RedditJs";

function App() {
  const [topic, setTopic] = useState("reactjs");

  // exercise 4:
  const [mount,setMount] = useState(true)
  

  return (
    <div className="App">
      {/* <Reddit/> */}
      {/* <hr /> */}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          setTopic(e.target[0].value), (e.target[0].value = "");
        }}
      >
        <input type="text" name="userInput" placeholder="insert a topic" />
        <input type="submit" value="submit" />
      </form> */}
      {/* <RedditJs topic={topic} /> */}
      {/* <hr /> */}
      <button onClick={()=>{
        setMount(!mount)
      }}>{mount?"Unmount":"Mount"}</button>
      {mount?<KillComponent/>:null}
    </div>
  );
}

export default App;
