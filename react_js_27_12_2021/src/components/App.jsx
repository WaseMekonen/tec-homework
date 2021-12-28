import "./App.css";
import { useFetch } from "../hooks/useFetch";
import Spinner from "./Spinner";
import PerformanceProblem from './PerformanceProblem'

function App() {
  const [data, isLoading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );

  const element = data.map((album) => {
    return <p key={album.id}>{album.title}</p>;
  });

  return (
    <div className="App">
      {/* {isLoading ? <Spinner /> : element}
      {error ? <p style={{ color: "red" }}>data is Loading</p> : " "} */}
      <PerformanceProblem/>
    </div>
  );
}

export default App;
