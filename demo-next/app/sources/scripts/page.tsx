import Script from 'next/script'

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div id="text">Waiting...</div>
      <Script src="/scripts/test.js" />
    </div>
  )
}
