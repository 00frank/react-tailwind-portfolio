import { useState } from "react"

import Card from "../components/Card"
import { PlayMediaIcon, PauseMediaIcon, SpotifyIcon } from "../components/Icons"

import spotifyCover from "../assets/spotify-cover.png"

function Spotify() {
  const [playing, setPlaying] = useState(false)
  return (
    <Card className="bg-gradient-to-tr rounded-xl p-4 from-lime-950/50 from-30% to-[#1FDD63]/60">
      <div className="flex absolute blur">
        <div
          className="relative w-12 h-12 cursor-pointer select-none"
          onClick={() => setPlaying(!playing)}>
          <img className={`${playing ? "animate-spin blur-sm" : ""} transition-all w-11 h-11 rounded-full`} src={spotifyCover} alt="spotifyCover" />
        </div>
        <div className="pl-4 select-none">
          <p className="text-gray-400 font-semibold">OOOOOO</p>
          <p className="font-semibold">3xoo#xo0o#-|o9p</p>
        </div>
      </div>
      {/* blur effect up - new changes from here */}
      <div className="flex">
        <div
          className="relative w-12 h-12 cursor-pointer select-none"
          onClick={() => setPlaying(!playing)}>
          <img className={`${playing ? "animate-spin-slow shadow-slate-400 blur-sm " : ""}transition-all w-12 h-12 rounded-full`} src={spotifyCover} alt="spotifyCover" />
          <div className="bg-white text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full">
            {!playing && <PlayMediaIcon />}
            {!!playing && <PauseMediaIcon />}
          </div>
        </div>
        <div className="pl-4 text-wrap break-words">
          <p className="text-gray-400/90">Soamairi</p>
          <p className="font-semibold">tokyo dream - lofi</p>
        </div>
        <div className="flex justify-end items-end flex-1">
          <SpotifyIcon className="text-xl" />
        </div>
      </div>
    </Card>
  )
}

export default Spotify