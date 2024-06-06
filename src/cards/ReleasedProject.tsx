import Card from "@/components/Card"
import { LinkIcon } from "@/components/Icons"

import projectImage from "@/assets/pipatiya.png";

function ReleasedProject() {
  return (
    <Card
      to="https://pipatiya.com"
      className="bg-gradient-to-br from-[#FF27FF] via-[#9A00FF] to-[#0F2AFF] rounded-xl p-0.5 relative">
      <div className="bg-black rounded-xl p-8 w-full h-full">
        <div className="flex justify-center items-center my-10">
          <img className="max-w-28" src={projectImage} alt="project_image" />
        </div>
        <div className="flex">
          <p className="pr-2">
            <span className="text-white font-bold block">Pipatiya</span>
            <span className="text-slate-200">Challenge your best rivals to a rock paper scissors game</span>
          </p>
          <div className="flex flex-1 justify-end items-end">
            <LinkIcon className="text-xl" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ReleasedProject