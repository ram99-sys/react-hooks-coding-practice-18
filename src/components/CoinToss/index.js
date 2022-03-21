// Write your code here
import {useState} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const CoinToss = () => {
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [tossImage, setTossImage] = useState(HEADS_IMG_URL)

  const onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      setHeads(prevState => prevState + 1)
      setTossImage(HEADS_IMG_URL)
    } else {
      setTails(prevState => prevState + 1)
      setTossImage(TAILS_IMG_URL)
    }
  }

  const totalCount = heads + tails

  return (
    <div className="app-container">
      <div className="coin-toss-container">
        <h1 className="app-heading">Coin Toss Game</h1>
        <p className="text">Heads (or) Tails</p>
        <img src={tossImage} alt="toss result" className="image-sizing" />
        <button type="button" className="button" onClick={onClickTossCoin}>
          Toss Coin
        </button>
        <div className="results-container">
          <p className="count">Total: {totalCount}</p>
          <p className="count">Heads: {heads}</p>
          <p className="count">Tails: {tails}</p>
        </div>
      </div>
    </div>
  )
}

export default CoinToss
