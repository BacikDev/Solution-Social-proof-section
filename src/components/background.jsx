import bgTopMobile from '../assets/images/bg-pattern-top-mobile.svg'
import bgBottomMobile from '../assets/images/bg-pattern-bottom-mobile.svg'

import bgTopDesktop from '../assets/images/bg-pattern-top-desktop.svg'
import bgBottomDesktop from '../assets/images/bg-pattern-bottom-desktop.svg'

export const Background = () => {
  return (
    <div >
        <picture className='absolute top-0 left-0 -z-1'> 
            <source media='(max-width: 375px)' srcSet={bgTopMobile}/>
            <source media='(min-width: 376px)' srcSet={bgTopDesktop}/>
            <img src={bgTopMobile} alt="background" />
        </picture>

        <picture className='absolute bottom-0 right-0 -z-1'>
            <source media='(max-width: 375px)' srcSet={bgBottomMobile}/>
            <source media='(min-width: 376px)' srcSet={bgBottomDesktop}/>
            <img src={bgBottomMobile} alt="background" />
        </picture>
    </div>
  )
}

