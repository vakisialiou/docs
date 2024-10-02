import CounterUseState from './components/CounterUseState'
import CounterUseEffect from './components/CounterUseEffect'
import { ThemeUseProvider, ThemeCounter } from './components/ThemeUseContext'

function App() {
  return (
    <div className="App">
        <div>
          <CounterUseState />
          <CounterUseState />
        </div>
        <div>
          <CounterUseEffect />
        </div>
        <ThemeUseProvider theme="dark">
            <ThemeCounter />
        </ThemeUseProvider>
    </div>
  );
}

export default App;
