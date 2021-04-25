import './App.css';
import EventSourcing from './EventSourcing';
import LongPulling from './LongPulling';

function App() {
  return (
    <div>
      <LongPulling />
      <EventSourcing />
    </div>
  );
}

export default App;
