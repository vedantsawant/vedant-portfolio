export default function Badge({ badgeText, color }: { badgeText: string; color: string }) {
  return (
    <div
      className={
        color +
        ' w-min rounded-full border-2 border-black px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
      }
    >
      {badgeText}
    </div>
  )
}
