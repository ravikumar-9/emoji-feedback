// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClicking = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    const {isClicked} = this.state

    console.log(loveEmojiUrl)

    let authButton = ''

    if (isClicked === false) {
      authButton = (
        <div className="card-container">
          <h1 className="feed-question">
            How satisfied are you with our customer support Performance?
          </h1>
          <div className="emojis-container">
            {emojis.map(eachEmoji => (
              <div className="emoji-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClicking}
                >
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    className="emoji"
                  />
                </button>
                <p className="emoji-name">{eachEmoji.name}</p>
              </div>
            ))}
          </div>
        </div>
      )
    } else {
      authButton = null
    }

    return <div className="bg-container">{authButton}</div>
  }
}

export default Feedback
