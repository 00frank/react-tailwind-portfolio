import { useEffect, useRef, useState } from "react"

import Card from "@/components/Card"
import { PlayMediaIcon, PauseMediaIcon, SpotifyIcon } from "@/components/Icons"

import spotifyCover from "@/assets/spotify-cover.png"
import song from "@/assets/Emil Rottmayer - Descend.mp3"

const spotifySong = {
  url: "https://open.spotify.com/intl-es/track/5qibxzFe45UtLxVA4W4aHg?si=44c72f8b0fd64295",
  mp3: song,
  cover: spotifyCover
};

function Spotify() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(new Audio(spotifySong.mp3));

  useEffect(() => {
    audioRef.current.volume = 0.3
    if (playing)
      audioRef.current.play()

    if (!playing)
      audioRef.current.pause()
  }, [playing])

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => audioRef.current.play());
    return () => {
      audioRef.current.removeEventListener('ended', () => audioRef.current.play());
    };
  }, []);

  return (
    <Card className="bg-gradient-to-tr rounded-xl p-4 from-lime-950/50 from-30% to-[#1FDD63]/60">
      <div className="flex">
        <div
          className="relative w-12 h-12 cursor-pointer select-none"
          onClick={() => setPlaying(!playing)}>
          <img className={`${playing ? "animate-spin-slow shadow-slate-400 " : ""}transition-all w-12 h-12 rounded-full`} src={spotifySong.cover} alt="spotifyCover" />
          <div className="bg-white text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full">
            {!playing && <PlayMediaIcon />}
            {!!playing && <PauseMediaIcon />}
          </div>
        </div>
        <div className="pl-4 flex flex-col text-wrap break-words">
          <p className="text-gray-200/90">Emil Rottmayer</p>
          <p className="font-semibold">Descend</p>
        </div>
        <a href={spotifySong.url} target="__blank" className="flex justify-end items-end flex-1">
          <SpotifyIcon className="text-xl" />
        </a>
      </div>
    </Card>
  )
}

export default Spotify