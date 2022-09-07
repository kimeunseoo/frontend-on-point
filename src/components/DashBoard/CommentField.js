import React from "react";

function CommentField( { ondate, commenttext, author } ) {

  return (
    <div>
        <div class = "comment-box">
            <div class = "comment-date">{ondate}</div>
            <div class = "comment-text">{commenttext}</div>
            <div class = "comment-from">{author}</div>
        </div>
    </div>
  );
}

export default CommentField;
