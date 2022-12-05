import React from "react";
import { toast } from "react-toastify";
import PageTitle from "../../Hooks/PageTitle";


const AddServices = () => {
  PageTitle("Add New Services")
  const handelAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const imgURL = form.imgURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const newService = {
      id: Math.random(),
      name:  title ,
      img: imgURL ,
      price:  price ,
      description: description,
    };
    
    fetch("https://pixel-click-photographer-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("New Services Added!");
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <section className="p-2 my-10 rounded-2xl max-w-screen-lg mx-auto">
      <h1 className="font-bold text-4xl text-center my-10">
        Add A New Service
      </h1>

      <form onSubmit={handelAddProduct} className="mx-5">
        {/* services details  */}
        <h5 className="text-2xl my-3">Services Details</h5>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="imgURL"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-full h-48"
            required
          />
        </div>
        <input
          type="submit"
          className="py-2 px-4 mt-3 rounded-3xl hover:bg-black bg-red-600 text-white w-fit"
          value="Add Services"
        />
      </form>
    </section>
  );
};

export default AddServices;
