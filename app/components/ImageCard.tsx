type Props = {
  imageUrl: string
  color: string
  children: React.ReactNode
}

export default function ImageCard({ imageUrl, color, children }: Props) {
  return (
    <figure
      className={
        color +
        ' w-[350px] overflow-hidden rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
      }
    >
      <img className="w-full" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 border-black p-4">{children}</figcaption>
    </figure>
  )
}
