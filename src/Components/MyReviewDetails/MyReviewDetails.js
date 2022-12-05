import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import PageTitle from "../../Hooks/PageTitle";

const MyReviewDetails = ({ myReview, handleDelete }) => {
  PageTitle('My Reviews')
  const { _id, name, email, message, img, serviceImg, serviceName, servicePrice } = myReview;
  return (
    <tr>
      <td>
        <div className="w-24 h-24">
          <img src={img} alt="Service Img" className="w-14 h-14"/>
          <p>{name}</p>
        </div>
      </td>
      <td>
        <div>
          <p className="font-semibold text-xl">{serviceName}</p>
          <p className="text-sm opacity-50">{servicePrice}$</p>
        </div>
      </td>
      <td>
        {message}
      </td>
      <td>
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn btn-circle mr-5">
          <AiOutlineEdit className="text-2xl"></AiOutlineEdit>
        </label>
        <label htmlFor="my-modal-6" className="btn btn-circle">
          <AiOutlineDelete  className="text-2xl"></AiOutlineDelete>
        </label>

        {/* Update Modal */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <form >
            <div className="modal-box relative w-full">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <p className="font-bold mt-4">You Want to change your review?</p>
              <textarea
                name="newReview"
                className="textarea textarea-primary w-full py-5 my-5"
                placeholder="New Review"
              ></textarea>
              <br />
              <input 
              type="submit" 
              value="Update" 
              className="py-2 px-4 mt-3 rounded-3xl hover:bg-black bg-red-600 text-white w-fit" />
            </div>
          </form>
        </div>

        {/* Delete Modal */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you want to delete this review?</h3>
            <p className="py-4"></p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" onClick={() => handleDelete(_id)} className="btn">Yes</label>
              <label htmlFor="my-modal-6" className="btn">No</label>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MyReviewDetails;
