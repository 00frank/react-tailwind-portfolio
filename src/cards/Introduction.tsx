import Card from '../components/Card'
import reactSvg from '../assets/react.svg'
import Button from '../components/Button'
import { LinkedinIcon } from '../components/Icons'

const ARFlag = () => {
  return (
    <img style={{ display: 'inline', width: 18, translate: '-1px -2px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png" alt="flag_ar" />
  )
}

const Introduction = () => {
  return (
    <Card border className="p-12">
      <div className="mb-6 relative">
        <img src={reactSvg} alt="reactSvg" />
        <img src={reactSvg} className="blur-md absolute top-0" alt="reactSvg" />
      </div>
      <h1 className="text-4xl font-semibold mb-6">Frank <span hidden>García</span></h1>
      <p className="text-gray-200/70 mb-6 text-wrap">Cloud engineer based in Buenos Aires, AR <ARFlag />. Currently focused on my studies at{" "}
        <a className="text-white hover:underline" href="#" target="_blank">UCEMA</a>{" "}
        and programming for{" "}
        <a className="text-white hover:underline" href="#" target="_blank">example.co</a>.
      </p>
      <Button
        to="https://linkedin.com/in/garcia-frank"
        fullRounded
        uppercase>
        <LinkedinIcon className="mr-2" />
        <span className="mr-1 text-xs font-bold">Follow Me</span>
      </Button>
    </Card>
  )
}

export default Introduction