import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import Review from "../../../Review/Review";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import PageTitle from "../../../../Hooks/PageTitle";

const ServicesPageDetails = () => {
  const servicesDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { _id, name, img, price, description } = servicesDetails;
  console.log(servicesDetails);
  PageTitle('Service Details')
  const reviewGetUrl = `https://pixel-click-photographer-server.vercel.app/reviews?serviceId=${_id}`;

  useEffect(() => {
    fetch(reviewGetUrl)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviewGetUrl]);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;

    const reviews = {
      serviceId: _id,
      serviceName: name,
      servicePrice: price,
      serviceImg: img,
      userId: user?.uid,
      email: user?.email,
      name: user?.displayName,
      img: user?.photoURL,
      message,
    };

    fetch("https://pixel-click-photographer-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thank You For Your Review");
        }
        form.rest()
      })
      .catch((er) => console.error(er));
  };

  return (
    <section className='max-w-screen-lg mx-auto'>
      {/* package-details */}
      <form onSubmit={handleReview} className="package-details">
        {/* package details */}
        <div className="w-full rounded-3xl glass p-2 mt-20 mb-10">
          <div className="card-body w-full text-center">            
            <img
              src={img}
              alt="serviceCardImg"
              className="rounded-3xl w-full mx-auto"
            />
            <h2 className=" text-center text-3xl font-bold">{name}</h2>
            <h3 className="text-xl font-semibold">Price: {price}$</h3>
            <p>{description}</p>
            
          </div>
        </div>
        {/* review section */}
        {user?.email ? (
          <div className="glass py-4 rounded-xl mt-5">
              <h2 className=" mx-5 mb-5 text-xl font-bold">Provide Your Valuable Review</h2>
            <div className="mx-5 mb-5 flex items-center gap-3">
              <img src={user?.photoURL} alt="" className="h-12 rounded-full" />
              <p>{user?.displayName}</p>
            </div>
            <div className="form-control mx-5">
              <textarea
                className="textarea textarea-bordered rounded-xl h-48"
                name="message"
                placeholder="Left Your Review"
                required
              ></textarea>
            </div>
            <div className="form-control mx-5">
              <input
                type="submit"
                value="Add Review"
                className="py-2 px-4 mt-3 rounded-3xl hover:bg-black bg-red-600 text-white w-fit"
              ></input>
            </div>
          </div>
        ) : (
          <div className="">
            <Link
              to="/login"
              className="hover:text-red-600 glass px-4 py-2 rounded-3xl"
            >
              Please Login To Add a Review
            </Link>
          </div>
        )}
      </form>
      {/* reviews-details */}
      <Review reviews={reviews}></Review>
    </section>
  );
};

export default ServicesPageDetails;
