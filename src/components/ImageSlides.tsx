import { useEffect, useState } from "react"

import img1 from "/assets/img/545821.jpg"
import img2 from "/assets/img/1204665.jpg"
import img3 from "/assets/img/1229131.jpg"
import img4 from "/assets/img/1302137.jpg"
// fui puxar a imagem 5 mas tava dando B.O então tenho quer ver depois ate la so festa

const imagens = [img1, img2, img3, img4]

export default function ImageSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length)
    }, 7000) // troca a cada 7 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full w-full">
      <img
        src={imagens[index]}
        className="h-full w-full object-cover transition-opacity duration-1000"
      />
    </div>
  )
}