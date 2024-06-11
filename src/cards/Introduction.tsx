import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { LinkedinIcon } from '@/components/Icons'

import reactSvg from '@/assets/react.svg'
import profile from '@/assets/profile.png'

const ARFlag = () => {
  return (
    <img style={{ display: 'inline', width: 18, translate: '-1px -2px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png" alt="flag_ar" />
  )
}

const Introduction = () => {
  const [imageShowing, setImageShowing] = useState(false);
  return (
    <Card border className="p-12">
      <div className="mb-6 w-9 h-8 relative">
        <img
          hidden={imageShowing}
          src={reactSvg}
          alt="reactSvg" />
        <img
        onClick={() => setImageShowing(prev => !prev)}
          hidden={imageShowing}
          src={reactSvg}
          className="blur-md absolute top-0"
          alt="reactSvg" />
        <img
          hidden={!imageShowing}
          onClick={() => setImageShowing(prev => !prev)}
          className="rounded-full w-full"
          src={profile}
          alt="profile_image" />
      </div>
      <h1 className="text-4xl font-semibold mb-6">Frank <span hidden>García</span></h1>
      <p className="text-gray-200/70 mb-6 text-wrap">Cloud engineer based in Buenos Aires, AR <ARFlag />. Currently focused on my studies at{" "}
        <a className="text-white hover:underline" href="https://ucema.edu.ar/" target="_blank">UCEMA</a>{" "}
        and <span className="text-white hover:underline">open for work</span>
        {/* and programming for{" "} */}
        {/* <a className="text-white hover:underline" href="#" target="_blank">example.co</a>. */}
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