
### Hooks

1. **useState** — хук для управления состоянием внутри функционального компонента. Он возвращает текущее значение 
состояния и функцию для его обновления.
   - Если у вас есть простое состояние с несколькими независимыми значениями. В ином случае есть смысл рассмотреть 
   useReducer.
   - [x] [Create useState.jsx](../../demo/src/hook-examples/CounterUseState.jsx)
2. **useReducer** - это хук для управления состоянием, похожий на Redux. Он используется, когда логика обновления
   состояния сложная или когда необходимо объединить несколько состояний в одном месте.
   - Если нужно управлять состоянием с несколькими полями или сложными взаимосвязанными действиями (например, формы, 
   счетчики, многошаговые процессы).
   - Если требуется предсказуемое управление состоянием, где каждое действие имеет определенную логику для изменения 
   состояния.
   - Важно проговорить про аргументы:
     - 1 параметр это - функция reducer, которая будет вызываться в случае dispatch.
     - 2 параметр это - initialState либо аргумент для функции ленивого вычисления.
     - 3 не обязательный параметр - это функция ленивого вычисления initialState
   - [x] [Create useReducer.jsx](../../demo/src/hook-examples/FormUseReducer.jsx)
3. **useEffect** - По умолчанию хук вызывается при каждом рендере, но можно управлять его поведением через массив 
зависимостей. Возвращаемая функция вызывается при дистрое компонента.
   - [x] [Create useEffect.jsx](../../demo/src/hook-examples/CounterUseEffect.jsx)
4. **useContext** - позволяет получить доступ к значению контекста без необходимости пробрасывать его через пропсы.
Работает в связке с createContext.
   - [x] [Create useContext.jsx](../../demo/src/hook-examples/ThemeUseContext.jsx)
5. **useRef** - создает изменяемый объект, который сохраняет свое значение между рендерами и не вызывает повторного 
рендера при изменении.
   - [x] [Create useRef.jsx](../../demo/src/hook-examples/InputUseRef.jsx)
6. **useMemo** - используется для предотвращения лишних вычислений. Он запоминает результат функции и пересчитывает 
его только если зависимости изменились.
   - [x] [Create useMemo.jsx](../../demo/src/hook-examples/ExpensiveCalculationUseMemo.jsx)
7. **useCallback** - возвращает мемоизированную версию функции, которая обновляется только тогда, когда изменяются 
зависимости. Это полезно для оптимизации производительности, особенно при передаче функций в дочерние компоненты.
   - [x] [Create useCallback.jsx](../../demo/src/hook-examples/CounterUseCallback.jsx)
8. **useLayoutEffect** - работает аналогично useEffect, но **запускается синхронно** после всех изменений DOM. Он полезен, 
если необходимо выполнить эффект до отрисовки на экране. Например, для вычислений, связанных с размером или позицией 
элементов, которые должны произойти до рендеринга.
   - [x] [Create useLayoutEffect.jsx](../../demo/src/hook-examples/WidthUseLayoutEffect.jsx)
   - [x] Сравнить разницу с useEffect
     - **useEffect** запускается **асинхронно** после того, как браузер уже обновил интерфейс.
     - **useLayoutEffect** запускается **синхронно**, до рендеринга браузером. Это делает его подходящим для 
     работы с DOM напрямую, когда вам важно избежать промежуточных визуальных эффектов.
9. **useImperativeHandle** - используется с forwardRef для контроля того, какие значения возвращаются родительскому 
компоненту при использовании `ref`. Это полезно, когда вам нужно управлять поведением внутреннего компонента через 
родительский компонент, предоставляя контролируемый интерфейс для взаимодействия.
   - [x] [Create useImperativeHandle.jsx](../../demo/src/hook-examples/ParentUseImperativeHandle.jsx)
10. **useDebugValue** - используется для отображения отладочной информации в React DevTools. Полезен при создании 
кастомных хуков.
    - [x] [Create useDebugValue.jsx](../../demo/src/hook-examples/CustomHookUseDebugValue.jsx)
11. **useTransition** — это хук для создания переходов, которые позволяют разделять обновления на срочные и менее 
приоритетные, улучшая пользовательский опыт, когда обновления интерфейса могут быть отложены.
    - (React 18+)
    - [x] [Create useTransition.jsx](../../demo/src/hook-examples/ListUseTransition.jsx)
12. **useDeferredValue** - позволяет откладывать обновления значений до тех пор, пока срочные задачи не будут 
завершены. Это помогает предотвратить "замедление" интерфейса при большом количестве изменений.
    - (React 18+)
    - [x] [Create useDeferredValue.jsx](../../demo/src/hook-examples/ListUseDeferredValue.jsx)
13. **useId** - генерирует уникальные ID, которые полезны для синхронизации элементов (например, input и label) и 
избежания конфликтов идентификаторов в SSR (Server-Side Rendering).
    - (React 18+)
    - [x] [Create useId.jsx](../../demo/src/hook-examples/FormUseId.jsx)
14. **useSyncExternalStore** - используется для подписки на внешние хранилища (например, Redux) в реактивном стиле. 
Это хук для работы с "внешними" источниками данных, чтобы гарантировать синхронизацию состояния в соответствии с 
React 18 и его concurrency features.
    - (React 18+)
    - [x] Что такое concurrency features?
      - useTransition
      - useDeferredValue
      - React.Suspense
      - React.lazy
      - Concurrent Mode
    - [x] [Create useSyncExternalStore.jsx](../../demo/src/hook-examples/ResizableUseSyncExternalStore.jsx)
15. **useInsertionEffect** - предназначен для работы с библиотеки стилей (CSS-in-JS). Он **запускается синхронно** и 
выполняется до всех обычных эффектов и гарантирует, что стили будут вставлены в DOM до отрисовки компонента.
    - [x] [Create UseInsertionEffect.jsx](../../demo/src/hook-examples/BlockUseInsertionEffect.jsx)

### В чем разница между useLayoutEffect и useInsertionEffect?

Это два хука в React, которые **выполняются синхронно** во время рендеринга, но они используются для разных задач и имеют 
различия в своих применениях. 

1. `useInsertionEffect` выполняется до `useLayoutEffect` и предназначен для вставки стилей в DOM. Это самый ранний эффект, 
который React может выполнить при рендеринге, он запускается на этапе вставки элементов. 
2. `useLayoutEffect` - Используется для синхронного выполнения эффектов, которые влияют на DOM, таких как измерение 
размеров элемента, изменение положения элементов на странице или взаимодействие с элементами DOM перед их отрисовкой.
