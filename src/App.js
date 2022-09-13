import SCP from './SCP.json';
const Subject = SCP.map(
  (scp) => {return(
    <div class="text-center rounded shadow p-3 mb-2 bg-dark text-white"> 
      <h1>Item: {scp.item}</h1>
      <h1>Class: {scp.class}</h1>
      <p><b>Containment: </b> {scp.containment}</p>
      <p><b>Description: </b> {scp.description}</p>
      <p><img src={scp.images} className="img-fluid" alt="pic"></img></p>
    </div>
  )}
)
function App() {
return (<div>
  {Subject}
</div>)
}

export default App;
