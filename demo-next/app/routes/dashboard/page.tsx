import dynamic from 'next/dynamic'
import Tabs1 from './components/Tabs1'

const Tabs2 = dynamic(() => import('./components/Tabs2'))
const Tabs3 = dynamic(() => import('./components/Tabs3'), { ssr: false, loading: () => <p>Loading...</p> })

function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Dashboard Page</h1>

      <Tabs1
        activeTabId={1}
        tabs={[
          { id: 1, label: 'Tab 1', content: 'Content Tab 1' },
          { id: 2, label: 'Tab 2', content: 'Content Tab 2' },
          { id: 3, label: 'Tab 3', content: 'Content Tab 3' },
        ]}
      >
      </Tabs1>

      <Tabs2
        activeTabId={1}
        tabs={[
          { id: 1, label: 'Tab 1', content: 'Content Tab 1' },
          { id: 2, label: 'Tab 2', content: 'Content Tab 2' },
          { id: 3, label: 'Tab 3', content: 'Content Tab 3' },
        ]}
      >
      </Tabs2>

      <Tabs3
        activeTabId={1}
        tabs={[
          { id: 1, label: 'Tab 1', content: 'Content Tab 1' },
          { id: 2, label: 'Tab 2', content: 'Content Tab 2' },
          { id: 3, label: 'Tab 3', content: 'Content Tab 3' },
        ]}
      >
      </Tabs3>


    </div>
  )
}

export default Page
