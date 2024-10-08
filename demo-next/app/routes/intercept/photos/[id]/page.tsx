import ButtonBack from '@app/ui/ButtonBack'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col w-96 h-96 items-center justify-center bg-blue-700 gap-2">
        <div>{params.id}</div>

        <ButtonBack>Back</ButtonBack>
      </div>
    </div>
  )
}
