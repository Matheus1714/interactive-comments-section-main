import React, { Image } from 'react'
import './CardComment.css'

import IconPlus from'../../assets/icons/icon-plus.svg'
import IconMinus from'../../assets/icons/icon-minus.svg'

import ScoreButton from './ScoreButton'

export default props => {
    const userName = props.userName
    const score = props.score
    const userImagePath = props.userImage
    const createdAt = props.createdAt
    const content = props.content

    return (
        <div className="CardComment">
            <div className="Score">
                <ScoreButton icon={IconPlus} />
                <p>{score}</p>
                <ScoreButton icon={IconMinus} />
            </div>
            <div className="UserComment">
                <div className="UserImage">
                    <p>{userImagePath}</p>
                </div>
                <div className="UserName">
                    <p>{userName}</p>
                </div>
                <div className="createdAt">
                    <p>{createdAt}</p>
                </div>
                <div className="Content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}