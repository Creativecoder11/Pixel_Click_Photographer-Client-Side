import React from "react";

const ReviewsDetails = ({ review }) => {
  const { _id, serviceName, name, email, img, message } = review;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm opacity-50">{email}</p>
          </div>
        </div>
      </td>
      <td className="text-black">
        {message}
      </td>
      <td>{serviceName}</td>
    </tr>
  );
};

export default ReviewsDetails;
