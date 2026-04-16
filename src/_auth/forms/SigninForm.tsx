import { GalleryVerticalEnd } from "lucide-react"
import { SigninForm } from "@/components/sign-in"
import ImageSlider from "@/components/ImageSlides"

export default function SigninPage(){
  return(
    <div className="grid min-h-screen lg:grid-cols-[1fr_2fr]">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-[#0d192b]">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SigninForm />
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-full">
        <div className="h-full w-full">
          <ImageSlider />
        </div>
      </div>
    </div>
  )
}