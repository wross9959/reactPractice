
import SideBar from "./SideBar.jsx"
import HeaderBar from "./HeaderBar.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {

  return (
    <>
    <HeaderBar/>
    <div className="container">
      <SideBar/>
      <Dashboard/>
    </div>
    
    
    
    </>
  );
}

export default App
