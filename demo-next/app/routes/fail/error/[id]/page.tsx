
function Page() {
  const error = true
  if (error) {
    throw new Error('Page not implemented')
  }
  return (
    <div className="flex flex-col">
      Fail Page
    </div>
  )
}

export default Page
