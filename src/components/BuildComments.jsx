import React from 'react'
import Comment from './Comment';

export default props => props.comments.map((comment) => {
    return <Comment
        key={comment.id}
        comment={comment}
    />
})