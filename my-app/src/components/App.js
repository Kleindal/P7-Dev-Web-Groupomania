import './App.css';



function App({children}) {
  return (
    <div className="App">
      <header className="App-header">
        <div className='style'>
        {/* <Group /> */}
        {children}
        </div>
      </header>
    </div>
  );
}

export default App;