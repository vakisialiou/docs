import Image from 'next/image'
import img1 from '@public/images/download-1.jpeg'
import img2 from '@public/images/download-2.jpeg'
import img3 from '@public/images/download-3.jpeg'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        priority
        src={img1}
        alt="Picture of the author"
      />

      <Image
        priority
        src={img2}
        alt="Picture of the author"
      />

      <Image
        priority
        src={img3}
        alt="Picture of the author"
      />
    </div>
  )
}
