import news from '../models/news'
import { useRef, useState } from 'react'
import { Ref } from 'react'

export default function MainNews() {
  const [image, setImage] = useState(news.news_1.picture)
  const [header, setHeader] = useState(news.news_1.header)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  function handleChange(e) {
    if (e.target.ref === leftRef) {
      // Going to the left
    } else if (e.target.ref === leftRef) {
      // Going to the right
    }
  }

  return (
    <div style={{backgroundImage:`url('${image}')`}} className='main-news'>
      <h1>{header}</h1>
      <div className='button-news-group'>
        <div onClick={handleChange} ref={leftRef} className='button-news left'>left</div>
        <div onClick={handleChange} ref={rightRef} className='button-news right'>right</div>
      </div>
    </div>
  )
}
