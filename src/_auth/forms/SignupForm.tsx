import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/sign-up"
import ImageSlider from "@/components/ImageSlides"

export default function SignupPage() {
  return(
    <div className="grid min-h-screen lg:grid-cols-[1fr_2fr]">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-[#0d192b]">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
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