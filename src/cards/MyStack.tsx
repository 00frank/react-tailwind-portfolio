import Card from "@/components/Card"
import {
  StackIcon,
  GolangIcon,
  ReactIcon,
  NodeJsIcon,
  AwsIcon,
  NestJsIcon,
  TypescriptIcon,
} from "@/components/Icons"
import useWindowDimensions from "@/hooks/useWindowDimensions";

const randomBetween = (a: number, b: number) => a + Math.random() * (b - a);

const techs = [
  { icon: TypescriptIcon, top: "-" + randomBetween(0, 200) + "px", left: "0px", animation: "animate-[fall_3.5s_linear_infinite]", color: "text-[#2F74C0]", name: "Typescript" },
  { icon: ReactIcon, top: "-" + randomBetween(0, 200) + "px", left: "50px", animation: "animate-[fall_4.2s_linear_infinite]", color: "text-[#1399C4]", name: "React" },
  { icon: NodeJsIcon, top: "-" + randomBetween(0, 200) + "px", left: "100px", animation: "animate-[fall_3.8s_linear_infinite]", color: "text-[#699F5B]", name: "NodeJS" },
  { icon: AwsIcon, top: "-" + randomBetween(0, 200) + "px", left: "150px", animation: "animate-[fall_4.5s_linear_infinite]", color: "text-[#FF9C08]", name: "AWS" },
  { icon: GolangIcon, top: "-" + randomBetween(0, 200) + "px", left: "200px", animation: "animate-[fall_4s_linear_infinite]", color: "text-[#08AFD8]", name: "Go - Golang" },
  { icon: NestJsIcon, top: "-" + randomBetween(0, 200) + "px", left: "250px", animation: "animate-[fall_3.2s_linear_infinite]", color: "text-[#E12A54]", name: "NestJS" },
]

const smallTechs = [
  { icon: NodeJsIcon, top: "-" + randomBetween(50, 200) + "px", left: "0px", animation: "animate-[fall_3s_linear_infinite]" },
  { icon: NestJsIcon, top: "-" + randomBetween(50, 200) + "px", left: "50px", animation: "animate-[fall_3.4s_linear_infinite]" },
  { icon: GolangIcon, top: "-" + randomBetween(50, 200) + "px", left: "100px", animation: "animate-[fall_2.4s_linear_infinite]" },
  { icon: AwsIcon, top: "-" + randomBetween(50, 200) + "px", left: "150px", animation: "animate-[fall_2.5s_linear_infinite]" },
  { icon: TypescriptIcon, top: "-" + randomBetween(50, 200) + "px", left: "200px", animation: "animate-[fall_2.7s_linear_infinite]" },
  { icon: ReactIcon, top: "-" + randomBetween(50, 200) + "px", left: "250px", animation: "animate-[fall_3.2s_linear_infinite]" },
]

const smallerTechs = [
  { icon: ReactIcon, top: "-" + randomBetween(50, 150) + "px", left: "0px", animation: "animate-[fall_2s_linear_infinite]" },
  { icon: NodeJsIcon, top: "-" + randomBetween(50, 150) + "px", left: "50px", animation: "animate-[fall_1.8s_linear_infinite]" },
  { icon: TypescriptIcon, top: "-" + randomBetween(50, 150) + "px", left: "100px", animation: "animate-[fall_2.3s_linear_infinite]" },
  { icon: AwsIcon, top: "-" + randomBetween(50, 150) + "px", left: "150px", animation: "animate-[fall_2.1s_linear_infinite]" },
  { icon: GolangIcon, top: "-" + randomBetween(50, 150) + "px", left: "200px", animation: "animate-[fall_2.6s_linear_infinite]" },
  { icon: NestJsIcon, top: "-" + randomBetween(50, 150) + "px", left: "250px", animation: "animate-[fall_2.5s_linear_infinite]" },
]

function RainStack() {
  const { width } = useWindowDimensions()
  const maxWidth = width <= 416 ? width - ((32 + 32) + (24 + 24)) : 318
  return <div className="relative flex max-w-80 mx-auto overflow-hidden h-[400px] mb-2">
    {smallerTechs.map((element, i) => (
      <element.icon key={i}
        className={`absolute ${maxWidth === 318 ? "h-6 w-6" : "h-5 w-5"} opacity-20 ${element.animation}`}
        style={{ top: element.top, left: ((maxWidth / 6) * i) + "px" }} />
    ))}
    {smallTechs.map((element, i) => (
      <element.icon key={i}
        className={`absolute block ${maxWidth === 318 ? "h-8 w-8" : "h-6 w-6"} flex-1 opacity-40 ${element.animation}`}
        style={{ top: element.top, left: ((maxWidth / 6) * i) + "px" }} />
    ))}
    {techs.map((element, i) => (
      <element.icon key={i}
        className={`absolute block ${maxWidth === 318 ? "h-10 w-10" : "h-8 w-8"} flex-1 text-gray-50 ${element.animation}`}
        style={{ top: element.top, left: ((maxWidth / 6) * i) + "px" }} />
    ))}
  </div>
}

function MyStack() {
  return (
    <Card
      className="p-8"
      border>
      <RainStack />
      <div className="flex flex-wrap mb-2 justify-center">
        {techs.map((element, i) => {
          return <p className="pr-4 inline-flex items-center" key={i}>
            <element.icon className={` text-lg inline mr-2 ${element.color}`} />
            <span>{element.name}</span>
          </p>
        })}
      </div>
      <div className="flex">
        <p>
          <span className="text-white animate-drop font-bold block">My stack</span>
          <span className="text-slate-200">Ready to code</span>
        </p>
        <div className="flex flex-1 justify-end items-end">
          <StackIcon className="text-xl" />
        </div>
      </div>
    </Card>
  )
}

export default MyStack