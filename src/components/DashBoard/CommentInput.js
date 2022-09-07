import React from "react";
import com from "../../bridge/fetch";

function CommentInput( data ) {

  return (
    <div>
        <div class = "comment-edit">
            <textarea id = "comel" class = "comment-input"></textarea>
            <div class = "under">
            <button onClick={(e) => {
                const el = document.getElementById('comel');
console.log(`https://wbs-backend-finalproject.herokuapp.com/comment/set/${data.data.uid}/${data.data.eid}/${new Date().getTime()}/${el.value}`);
                com(`https://wbs-backend-finalproject.herokuapp.com/comment/set/${data.data.uid}/${data.data.eid}/${new Date().getTime()}/${el.value}`,
                function(e) {});
                el.value = "";
                window.setTimeout( () => {
                  window.location.href = `http://localhost:3000/search/${data.data.eid}`;
                }, 100 );
            }}>Post</button>
            </div>
        </div>
    </div>
  );
}

export default CommentInput;
