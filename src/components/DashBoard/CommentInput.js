import React from "react";
import com from "../../bridge/fetch";
import { useNavigate } from 'react-router-dom';

function CommentInput( data ) {
  const navigate = useNavigate();
  return (
    <div>
        <div class = "comment-edit">
            <textarea id = "comel" class = "comment-input"></textarea>
            <div class = "under">
            <button onClick={(e) => {
                const el = document.getElementById('comel');
console.log(`https://backend-on-point.onrender.com/comment/set/${data.data.uid}/${data.data.eid}/${new Date().getTime()}/${el.value}`);
                com(`https://backend-on-point.onrender.com/comment/set/${data.data.uid}/${data.data.eid}/${new Date().getTime()}/${el.value}`,
                function(e) {});
                el.value = "";
                window.setTimeout( () => {
                 navigate(`/search/${data.data.eid}`);
                }, 100 );
            }}>Post</button>
            </div>
        </div>
    </div>
  );
}



export default CommentInput;
