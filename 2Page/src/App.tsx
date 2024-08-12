import { Headernav } from "./components/nav_header";
import { Heading } from "./Pages/header";
function App() {
  return <>
  <div className="bg-zinc-100">
    <Headernav></Headernav>
    <hr />
    <Heading/>
  </div>
  </>;
}

export default App;
