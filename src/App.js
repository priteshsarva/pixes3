import './App.css';
import LoadingScreen from './components/loadingscreen/LoadingScreen'
import LookingFor from './components/lookingFor/LookingFor';


function App() {
  return <>
    <div className="mainroot">
      <LoadingScreen />
      <LookingFor />
    </div>
  </>

}

export default App;
