import useCustomHook from "./useCustomHook";
function App() {
  const update1 = useCustomHook(0, "IncButton");
  return (
    <div className="App">
      <center>
        <h1>Welcome To The Custom Hook</h1>
        <button className="btn" onClick={update1}>
          Increment
        </button>
      </center>
    </div>
  );
}

export default App;
