import SearchAndDisplay from "./SeatchAndDisplay";

function App() {
  return (
    <>
      <div>
        <p>This is a tool to find you these information about a country:</p>
        <ul>
          <li>Official name in full</li>
          <li>Currency name and symbol</li>
          <li>Flag & coat of arms</li>
          <li>What side of the road they drive on</li>
        </ul>
      </div>
      <div>
        <SearchAndDisplay />
      </div>
    </>
  );
}

export default App;
