import React from 'react'
import classes from './OffersList.module.scss'
import {OffersItem} from "./OffersItem/OffersItem"
import '../../../../_global.scss'


const offers = [
  {
    id: 1,
    title: (<>Поднимает <br className='desktop-only'/> настроение</>),
    text: (<>Приложение позволит вам<br className='desktop-only'/> победить <br className='mobile-tablet'/>осеннюю
      хандру<br className='desktop-only'/> и депрессию <br className='mobile-only'/> буквально
      в<br className='tablet-desktop'/> несколько кликов!</>)
  },
  {
    id: 2,
    title: (<>Меняет мир <br className='desktop-only'/> вокруг</>),
    text: (<>Сделайте снимок и <br className='desktop-only'/> украсьте его <br className='mobile-only'/> смайликом <br
      className='tablet-desktop'/>
      или текстовой подписью, <br className='mobile-desktop'/> чтобы <br className='tablet-only'/>
      усилить эффект</>)
  },
  {
    id: 3,
    title: (<>Заводит <br className='desktop-only'/> новых друзей</>),
    text: (<>Ставьте лайки,<br className='desktop-only'/> комментируйте,<br className='mobile-only'/> делитесь<br
      className='tablet-desktop'/> фотографиями с друзьями <br className='desktop-only'/> и <br
      className='mobile-only'/>заводите новых</>)
  }
]

export const OffersList = props => {
  return (
    <div className={classes.OffersList}>
      <ul className={`${classes.list} list`}>
        {offers.map(offer => (
            <OffersItem
              key={offer.id}
              title={offer.title}
              text={offer.text}
              link={offer.link}
              class={'offer-' + offer.id}
            />
          )
        )}
      </ul>
    </div>
  )
}
