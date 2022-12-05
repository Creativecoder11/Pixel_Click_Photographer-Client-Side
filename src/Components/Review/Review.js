import React from "react";
import ReviewsDetails from "./ReviewsDetails";

const Review = ({ reviews }) => {
  return (
    <div className="all-reviews glass p-2 mt-10 rounded-2xl">
      <h1 className="text-2xl font bold my-3 ml-3">
        
        Total Reviews: {reviews.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Message</th>
              <th>Package Name</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewsDetails review={review}></ReviewsDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Review;
