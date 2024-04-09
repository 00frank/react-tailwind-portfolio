import { Introduction, Spotify, LastProject, MyStack } from "./cards"
import { ICard } from "./types"

const cardsLeft: ICard[] = [
  { content: Introduction },
  { content: Spotify },
]

const cardsRight: ICard[] = [
  { content: LastProject },
  { content: MyStack }
]

function App() {
  return (
    <div className="text-white flex flex-col md:flex-row items-center md:items-start md:justify-center gap-6 p-4">
      <div className="flex flex-col gap-6">
        {cardsLeft.map((card, i) => {
          return <card.content key={i} />
        })}
      </div>
      <div className="flex flex-col gap-6">
        {cardsRight.map((card, i) => {
          return <card.content key={i} />
        })}
      </div>
    </div>
  )
}

export default App
