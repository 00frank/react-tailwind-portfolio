import { Introduction, Spotify } from "./cards"
import { ICard } from "./types"

const cards: ICard[] = [
  { content: Introduction },
  { content: Spotify }
]

function App() {
  return (
    <div className="text-white flex flex-col md:flex-row items-center md:items-start md:justify-center gap-6 p-8 h-screen">
      <div className="flex flex-col gap-6">
        {cards.map((card, i) => {
          return <card.content key={i} />
        })}
      </div>
      <div className="flex flex-col gap-6">
        {cards.map((card, i) => {
          return <card.content key={i} />
        })}
      </div>
    </div>
  )
}

export default App
