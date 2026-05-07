import { useEffect, useState } from "react"

import img1 from "/assets/img/545821.jpg"
import img2 from "/assets/img/1204665_01.jpg"
import img3 from "/assets/img/1229131.jpg"
import img4 from "/assets/img/1302137.jpg"

const imagens = [img1, img2, img3, img4]

export default function ImageSlider() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {

      // começa fade out
      setFade(false)

      setTimeout(() => {
        // troca imagem
        setIndex((prev) => (prev + 1) % imagens.length)

        // fade in
        setFade(true)
      }, 350) // efeito do fade dura 0,35 segundos

    }, 10000) // a cada 10 segundos troca a imagem

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0d192b]">
      <img
        src={imagens[index]}
        alt="slide"
        className={`h-full w-full object-cover transition-all duration-700 ease-in-out ${
        fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />
    </div>
  )
}