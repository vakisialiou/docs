### Что такое фрагменты в React и зачем они нужны?
Фрагменты (Fragments) в React — это специальная функциональность, которая позволяет группировать несколько дочерних 
элементов без добавления лишней обёртки в DOM. Это полезно, когда вам нужно вернуть несколько элементов из компонента, 
но при этом не хочется добавлять дополнительные узлы, такие как <div>, которые могут нарушить структуру HTML или 
повлиять на стили и верстку.

#### Зачем нужны фрагменты?
Если у вас есть компонент, который должен вернуть несколько элементов, в React можно возвращать только один корневой 
элемент. Обычно это решается с помощью обёртки, например, <div>, но это добавляет лишнюю разметку в DOM, что не всегда 
желательно. В таких случаях можно использовать фрагменты. Они позволяют обернуть несколько дочерних элементов без 
добавления лишнего узла в DOM.

#### Использование фрагментов
- **Пустые фрагменты ``<>``:** Как в примере выше, самый простой способ использовать фрагмент — это пустая 
запись ```<>...</>```. Такой синтаксис особенно удобен, когда нет необходимости использовать какие-либо атрибуты на 
фрагменте.
- **Фрагменты с ``React.Fragment``:** В случае, если вам нужно добавить атрибуты (например, ключи key в циклах), 
вы можете использовать полную форму с ``React.Fragment``.

### Почему важно использовать ключи (keys) в списках компонентов?
Ключи в списках компонентов в React играет важную роль для оптимизации процесса обновления и перерисовки списка 
элементов. Ключи помогают React эффективно отслеживать и идентифицировать изменения в списках и компонентах, чтобы 
минимизировать манипуляции с DOM.

Ключи помогают определить, какие элементы (добавлены, удалены, изменены).

#### Разница между использованием ``index`` и ``id``
- ``index`` когда ключом используется индекс элемента в массиве, это работает до тех пор, пока список остаётся 
неизменным. Но если элементы добавляются, удаляются или перемещаются, индекс элемента меняется, и React может ошибочно 
перерендерить неправильно идентифицированные элементы.
- ``id`` когда ключом используется уникальный id например, каждого товара, React всегда сможет правильно сопоставить 
каждый элемент в списке с его предыдущей версией, независимо от изменений в порядке или количестве элементов. Это 
гарантирует, что React будет перерисовывать только те элементы, которые действительно изменились.
- 
#### Когда можно использовать индексы?
Использование индексов в качестве ключей допустимо только в случае, когда список статичен и не будет динамически 
обновляться (добавление, удаление, сортировка элементов).
