import Card from '../components/Card'
import reactSvg from '../assets/react.svg'
import Button from '../components/Button'
import { LinkedinIcon } from '../components/Icons'

const Introduction = () => {
  return (
    <Card border className="p-10">
      <div className="pb-4 relative">
        <img src={reactSvg} alt="reactSvg" />
        <img src={reactSvg} className="blur-md absolute top-0" alt="reactSvg" />
      </div>
      <h1 className="text-3xl font-semibold pb-2">Frank <span hidden>García</span></h1>
      <p className="text-gray-400/90 pb-4 text-wrap">Cloud engineer based in Buenos Aires, AR 🇦🇷. Currently focused on my studies at{" "}
        <a className="text-white hover:underline" href="#">UCEMA</a>{" "}
        and programming for{" "}
        <a className="text-white hover:underline" href="#">example.co</a>.
      </p>
      <Button
        fullRounded
        uppercase>
        <LinkedinIcon className="mr-2" />
        <span className="mr-1">Follow Me</span>
      </Button>
    </Card>
  )
}

export default Introduction