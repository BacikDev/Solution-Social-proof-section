import { Hero } from "./components/hero"
import { RatingContainer } from "./components/rating-container"
import { ReviewContainer } from "./components/review.container"
import { Background } from "./components/background"

function App() {
  return (
    <main className="font-League-Spartan px-6 py-20 relative xl:px-[165px]">
      <Background/>
    <div className="mb-12 xl:flex ">
      <Hero/>
      <RatingContainer/>
    </div>
    <ReviewContainer/>
    </main>
  )
}

export default App
