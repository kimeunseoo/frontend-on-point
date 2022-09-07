import React from "react";

function StarRating() {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <Rating
      name="half-rating-read"
      defaultValue={2.5}
      precision={0.5}
      readOnly
    /> */}
    </Stack>
  );
}

export default StarRating;
