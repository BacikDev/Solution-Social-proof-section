import StarImg from '../assets/images/icon-star.svg'

export const RatingCard = ({text, className}) => {
  return (
    <div className={`bg-Light-Grayish-Magenta rounded-lg p-4 xl:flex xl:w-[445px] xl:justify-center xl:gap-8 items-center ${className}`}>
        <div className='flex gap-2 place-content-center mb-4 xl:mb-0'>
            <img className='size-4' src={StarImg} alt="Star Icon" />
            <img className='size-4' src={StarImg} alt="Star Icon" />
            <img className='size-4' src={StarImg} alt="Star Icon" />
            <img className='size-4' src={StarImg} alt="Star Icon" />
            <img className='size-4' src={StarImg} alt="Star Icon" />
        </div>
        <p className='text-center text-[1.0625rem] text-Very-Dark-Magenta font-bold'>{text}</p>
    </div>
  )
}

