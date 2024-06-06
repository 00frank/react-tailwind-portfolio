import { Introduction, Spotify, LastProject, MyStack, ContactForm, Gallery, ReleasedProject, DownloadResume } from "./cards"
import { ICard } from "./types"

const cardsLeft: ICard[] = [
  { content: Introduction },
  { content: DownloadResume },
  { content: Spotify },
  { content: ReleasedProject },
  { content: Gallery, className: "hidden md:block" },
]

const cardsRight: ICard[] = [
  { content: LastProject },
  { content: MyStack },
  { content: Gallery, className: "block md:hidden" },
  { content: ContactForm },
]

function App() {
  return (
    <div className="text-white flex flex-col md:flex-row items-center md:items-start md:justify-center gap-6 p-6">
      <div className="flex flex-col gap-6">
        {cardsLeft.map((card, i) => {
          return <card.content key={i} {...{ className: card.className }} />
        })}
      </div>
      <div className="flex flex-col gap-6">
        {cardsRight.map((card, i) => {
          return <card.content key={i} {...{ className: card.className }} />
        })}
      </div>
    </div>
  )
}

export default App
