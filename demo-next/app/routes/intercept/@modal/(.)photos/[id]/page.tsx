import ButtonBack from '@app/ui/ButtonBack'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="fixed w-full h-full flex items-center justify-center top-0 left-0">
      <div className="fixed w-full h-full bg-gray-900 top-0 left-0 opacity-95"></div>
      <div className="flex flex-col w-80 h-80 items-center justify-center bg-blue-700 gap-2 z-10">
        <div>{params.id}</div>

        <ButtonBack>Back</ButtonBack>
      </div>
    </div>
  )
}
