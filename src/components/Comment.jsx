import React from 'react'

import CardComment from './layout/CardComment'

function Comment ({ comment }) {
    const nestedComments = (comment.replies || []).map(comment => {
        return <Comment 
                key={comment.id} 
                comment={comment} 
                type="child"
            />
    })
    return (
        <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
            <CardComment
                userName={comment.user.username}
                userImage={comment.user.image.png}
                createdAt={comment.createdAt}
                score={comment.score}
                content={comment.content}
            />
            {nestedComments}
        </div>
    )
}

export default Comment