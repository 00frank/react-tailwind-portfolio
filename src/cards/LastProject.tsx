import Card from "@/components/Card"
import { LinkIcon, GithubIcon } from "@/components/Icons"

function LastProject() {
  return (
    <Card
      to="https://github.com/00frank/analyze-and-generate-images-with-Azure-AI"
      className="bg-gradient-to-br from-[#FF27FF] via-[#9A00FF] to-[#0F2AFF] rounded-xl p-8">
      <div className="flex justify-center items-center my-10">
        <GithubIcon className="h-28 w-28" />
      </div>
      <div className="flex">
        <p>
          <span className="text-white font-bold block">Image Analyzer & Generation</span>
          <span className="text-slate-200">Learn basics of image analisis and generation with Computer Vision from Azure cloud and OpenAI API</span>
        </p>
        <div className="flex flex-1 justify-end items-end">
          <LinkIcon className="text-xl" />
        </div>
      </div>
    </Card>
  )
}

export default LastProject