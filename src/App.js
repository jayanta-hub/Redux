import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { count } from "./store/slice/counterSlice";
function App() {
  const dispatch = useAppDispatch();
  const countData = useAppSelector((state) => state?.CounterSclice?.count);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={() => dispatch(count())}>{countData}</button>
    </div>
  );
}

export default App;
