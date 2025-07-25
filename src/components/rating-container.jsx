import { RatingCard } from "./rating-card"

const ratings = ['Rated 5 Stars in Reviews', 'Rated 5 Stars in Report Guru','Rated 5 Stars in BestTech']

const positionClases = [
  'xl:place-self-start',
  'xl:place-self-center',
  'xl:place-self-end'
]

export const RatingContainer = () => {
  return (
    <div className="flex flex-col gap-4 xl:w-[540px] xl:justify-center">
      {ratings.map((rating, index)=>{
        return(
            <RatingCard key={rating} text={rating} className={positionClases[index]}/>
        )
      })}
    </div>
  )
}

