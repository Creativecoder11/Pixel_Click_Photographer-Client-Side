import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReviewDetails from "../MyReviewDetails/MyReviewDetails";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  const myReviewURL = `https://pixel-click-photographer-server.vercel.app/myReviews?email=${user?.email}`;

  const handleDelete = (_id) => {
    fetch(`https://pixel-click-photographer-server.vercel.app/reviews/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("User Deleted From Review Successfully!");
          const remainingReviews = myReviews.filter(
            (review) => review._id !== _id
          );
          setMyReviews(remainingReviews);
        }
      });
  };

  useEffect(() => {
    fetch(myReviewURL, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("UserToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut()
            .then(() => {
              toast.error("Please login!");
            })
            .catch((e) => {});
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
      });
  }, [myReviewURL, logOut]);
  return (
    <div className="p-8 my-10 rounded-2xl max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold">My Reviews: {myReviews?.length}</h1>
      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Message</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {myReviews?.map((myReview) => (
              <MyReviewDetails
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
              ></MyReviewDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// MyReviewDetails
export default MyReviews;
