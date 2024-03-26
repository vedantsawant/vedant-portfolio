type Props = {
    children: React.ReactNode
    color: String
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
  
  export default function Button({ children, color, onClick }: Props) {
    return (
      <button
        role="button"
        aria-label="Click to perform an action"
        onClick={onClick}
        className={color + " flex cursor-pointer items-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"}
      >
        {children}
      </button>
    )
  }
  