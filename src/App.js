import "./App.css";

function App() {
  const handleData = (data) => {
    console.log("Parent Received", data);
  };
  return (
    <div className="App">
      <h3>Mobile operating System</h3>
      <ul>
        <li>Android</li>
        <li>BlackBerry</li>
        <li>Iphone</li>
        <li>Window</li>
      </ul>

      <h3>Mobile Manufacturer</h3>
      <ul>
        <li>Samsung</li>
        <li>Htc</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>
    </div>
  );
}

export default App;
