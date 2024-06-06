import Card from "@/components/Card"
import { PdfIcon } from "@/components/Icons"

function DownloadResume() {
  return (
    <Card
      to="./Frank Garcia - Resume.pdf"
      border
      className="p-4 group flex relative justify-center items-center gap-2 cursor-pointer">
      <p className="text-white group-hover:underline underline-offset-2">Check my resume here</p>
      <PdfIcon />
      <div className="absolute -top-1 -right-1">
        <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping" />
        <div className="w-3 h-3 bg-red-400 rounded-full" />
      </div>
    </Card>
  )
}

export default DownloadResume