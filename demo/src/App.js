import CounterUseState from './hook-examples/CounterUseState'
import CounterUseEffect from './hook-examples/CounterUseEffect'
import { ThemeUseProvider, ToggleTheme } from './hook-examples/ThemeUseContext'
import FormUseReducer from './hook-examples/FormUseReducer'
import InputUseRef from './hook-examples/InputUseRef'
import ExpensiveCalculationUseMemo from './hook-examples/ExpensiveCalculationUseMemo'
import CounterUseCallback from './hook-examples/CounterUseCallback'
import WidthUseLayoutEffect from './hook-examples/WidthUseLayoutEffect'
import ParentUseImperativeHandle from './hook-examples/ParentUseImperativeHandle'
import CustomHookUseDebugValue from './hook-examples/CustomHookUseDebugValue'
import ListUseTransition from './hook-examples/ListUseTransition'
import ListUseDeferredValue from './hook-examples/ListUseDeferredValue'
import FormUseId from './hook-examples/FormUseId'
import ResizableUseSyncExternalStore from './hook-examples/ResizableUseSyncExternalStore'
import BlockUseInsertionEffect from './hook-examples/BlockUseInsertionEffect'

import FuncMemo from './optimization-examples/FuncMemo'
import ClassMemo from './optimization-examples/ClassMemo'

import ClassMount from './life-cycle/ClassMount'
import ClassUpdate from './life-cycle/ClassUpdate'
import ClassUnmount from './life-cycle/ClassUnmount'

import FuncMount from './life-cycle/FuncMount'
import FuncUpdate from './life-cycle/FuncUpdate'
import FuncUnmount from './life-cycle/FuncUnmount'

function App() {
  return (
      <div className="App flex flex-col gap-2 p-2">
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useState</div>
              <CounterUseState/>
              <CounterUseState/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useEffect</div>
              <CounterUseEffect/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useContext</div>
              <ThemeUseProvider theme="dark">
                  <ToggleTheme/>
                  <ToggleTheme/>
              </ThemeUseProvider>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useReducer</div>
              <FormUseReducer/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useRef</div>
              <InputUseRef/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useMemo</div>
              <ExpensiveCalculationUseMemo/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useCallback</div>
              <CounterUseCallback/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useLayoutEffect</div>
              <WidthUseLayoutEffect/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useImperativeHandle</div>
              <ParentUseImperativeHandle/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useDebugValue</div>
              <CustomHookUseDebugValue/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useTransition</div>
              <ListUseTransition/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useDeferredValue</div>
              <ListUseDeferredValue/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useId</div>
              <FormUseId/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useSyncExternalStore</div>
              <ResizableUseSyncExternalStore/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">useInsertionEffect</div>
              <BlockUseInsertionEffect/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">React.memo</div>
              <FuncMemo/>
          </div>
          <hr/>
          <div className="flex items-center gap-4">
              <div className="w-40 font-bold">shouldComponentUpdate</div>
              <ClassMemo/>
          </div>
          <hr/>
          <div className="flex flex-col gap-2">
              <div className="flex justify-center text-sm w-full">Open dev tool to see logs.</div>

              <div className="flex items-center gap-4">
                  <div className="w-40 font-bold">Class Mounting</div>
                  <ClassMount/>
              </div>

              <div className="flex items-center gap-4">
                  <div className="w-40 font-bold">Class Updating</div>
                  <ClassUpdate/>
              </div>

              <div className="flex items-center gap-4">
                  <div className="w-40 font-bold">Class Unmounting</div>
                  <ClassUnmount/>
              </div>
          </div>
          <hr/>
          <div className="flex flex-col gap-2">
              <div className="flex justify-center text-sm w-full">Open dev tool to see logs.</div>

              <div className="flex items-center gap-4">
                  <div className="w-40 font-bold">Func Mounting</div>
                  <FuncMount/>
              </div>

              <div className="flex items-center gap-4">
                  <div className="w-40 font-bold">Func Updating</div>
                  <FuncUpdate/>
              </div>

              <div className="flex items-center gap-4">
                  <div className="w-40 font-bold">Func Unmount</div>
                  <FuncUnmount/>
              </div>
          </div>

      </div>
  );
}

export default App;
