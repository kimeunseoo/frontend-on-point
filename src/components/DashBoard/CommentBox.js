import React, { useState, useEffect } from "react";
import CommentField from "./CommentField";
import CommentInput from "./CommentInput";

function CommentBox( data ) {

  const [ current, setCurrent ] = useState([]);

  function getPathKey(index) {
    const query = window.location.pathname;
    // *** //
    let result = "";
    let next = -1;
    // *** //
    for (let p = 0; p < query.length; p++) {
      if (query[p] === '/') {
        if (next === index)
          break;
        // *** //
        next++;
        // *** //
        if (next === index)
          result = "";
      }
      else
        result += query[p];
    }
    // *** //
    return result;
  }

  useEffect(
    () => {
      setCurrent({
        uid : sessionStorage.getItem("userid"),
        eid : getPathKey(1)
      });
      console.log(current);
    }, []
  );

  return (
    <div>
        {
            data.data.map( (item, index) => {
                return <CommentField ondate={item.ondate} commenttext={item.commenttext} author={item.author} />
            })
        }
        <CommentInput data={current} />
    </div>
  );
}

export default CommentBox;
