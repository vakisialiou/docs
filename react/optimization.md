### Оптимизация рендеринга

1. [React.memo](../demo/src/optimization-examples/FuncMemo.jsx) — предотвращает лишний рендеринг компонента, если его 
пропсы не изменились.
2. [PureComponent](../demo/src/optimization-examples/ClassMemo.jsx) — используется в классовых компонентах для контроля 
обновлений компонентов.
3. [shouldComponentUpdate](../demo/src/optimization-examples/ClassMemo.jsx) — используется в классовых компонентах 
для контроля обновлений компонентов.
4. [useMemo](../demo/src/hook-examples/ExpensiveCalculationUseMemo.jsx) — мемоизирует результат вычисления и 
использует его при рендере, если зависимости не изменились.
5. [useCallback](../demo/src/hook-examples/CounterUseCallback.jsx) — мемоизирует функции, чтобы не пересоздавать их 
при каждом рендере.
6. [useTransition](../demo/src/hook-examples/ListUseTransition.jsx) — позволяет более плавно переключать интерфейс 
при выполнении тяжёлых задач.