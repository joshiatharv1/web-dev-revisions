import './App.css';
import EventBind from './components/EventBind';
import EventHandlingExam from './components/EventHandlingExam';
import Greet from './components/Greet';
import MapFunctiom from './components/MapFunctiom';
import ParentComponent from './components/ParentComponent';
import PureParentComponent from './components/PureParentComponent';
import Form from './components/Form';
import Portal from './components/Portal';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import Synthetic from './components/Synthetic';
function App() {
  return (
    <div className="App">
      <Synthetic/>
      {/* <ClickCounter/> */}
      {/* <ErrorBoundry>
      <Hero name="Batman"/>
      <Hero name="IronMan"/>
      <Hero name="Joker"/>
      </ErrorBoundry> */}
      {/* <Portal/> */}
      {/* <Form /> */}
      {/* <MapFunctiom /> */}
      {/* <PureParentComponent/> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <EventHandlingExam/> */}
      {/* <Greet name="Atharv"/> */}
      {/* <p>This is a children of Greet</p> */}
    </div>
  );
}

export default App;
