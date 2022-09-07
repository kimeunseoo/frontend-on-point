import React from "react";

function CategoryItem( data ) {
    return (
		<div class = "catbox" onClick={(e) => {
            window.location.href = `http://localhost:3000/category/${data.data.cid}`;
        }}>
			<div class = "outer">
				<div class = "inner">
					<div class = "field">
						<div class = "topic">{data.data.title}</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
  
  export default CategoryItem;
  