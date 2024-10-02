import CounterUseState from './components/CounterUseState'
import CounterUseEffect from './components/CounterUseEffect'
import { ThemeUseProvider, ToggleTheme } from './components/ThemeUseContext'
import FormUseReducer from './components/FormUseReducer'
import InputUseRef from './components/InputUseRef'
import ExpensiveCalculationUseMemo from './components/ExpensiveCalculationUseMemo'
import CounterUseCallback from './components/CounterUseCallback'
import WidthUseLayoutEffect from './components/WidthUseLayoutEffect'
import ParentUseImperativeHandle from './components/ParentUseImperativeHandle'
import CustomHookUseDebugValue from './components/CustomHookUseDebugValue'
import ListUseTransition from './components/ListUseTransition'
import ListUseDeferredValue from './components/ListUseDeferredValue'
import FormUseId from './components/FormUseId'
import ResizableUseSyncExternalStore from './components/ResizableUseSyncExternalStore'
import BlockUseInsertionEffect from './components/BlockUseInsertionEffect'

function App() {
  return (
      <div className="App flex flex-col gap-1 p-2">
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useState</div>
              <CounterUseState/>
              <CounterUseState/>
          </div>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useEffect</div>
              <CounterUseEffect/>
          </div>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useContext</div>
              <ThemeUseProvider theme="dark">
                  <ToggleTheme/>
                  <ToggleTheme/>
              </ThemeUseProvider>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useReducer</div>
              <FormUseReducer/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useRef</div>
              <InputUseRef/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useMemo</div>
              <ExpensiveCalculationUseMemo/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useCallback</div>
              <CounterUseCallback/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useLayoutEffect</div>
              <WidthUseLayoutEffect/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useImperativeHandle</div>
              <ParentUseImperativeHandle/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useDebugValue</div>
              <CustomHookUseDebugValue/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useTransition</div>
              <ListUseTransition/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useDeferredValue</div>
              <ListUseDeferredValue/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useId</div>
              <FormUseId/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useSyncExternalStore</div>
              <ResizableUseSyncExternalStore/>
          </div>

          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useInsertionEffect</div>
              <BlockUseInsertionEffect/>
          </div>
      </div>
  );
}

export default App;
