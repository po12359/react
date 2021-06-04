import "./app.css";

function App() {
  const name = `Hello`;
  return (
    <>
      <h1>Hello {name}</h1>
      {name && <h1>nice to meet you {name}</h1>}
      {[`🍎`, `🍑`].map((item) => (
        <h1>{item}</h1>
      ))}
    </>
    /*   <>
    <h1>nono</h1>
    <h1>nono</h1>
    </>*/
  );
}

export default App;
