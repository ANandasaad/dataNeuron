import axios from "axios";
import { ChangeEvent, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addData } from "../utils/dataSlice";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [rating, setRating] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const dispatch = useDispatch();

  const handleModal = () => {
    setModal(true);
  };
  const handleBack = () => {
    setModal(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    if (!review || !rating) {
      const alertElement = document.createElement("div");
      alertElement.classList.add(
        "bg-red-100",
        "border",
        "border-red-400",
        "text-red-700",
        "px-4",
        "py-3",
        "rounded",
        "absolute",
        "top-0",
        "left-0",
        "w-full",
        "z-50"
      );
      alertElement.setAttribute("role", "alert");
      alertElement.innerHTML = `
  <strong class="font-bold">Warning!</strong>
  <span class="block sm:inline"> Please provide both review and rating</span>
`;
      document.body.appendChild(alertElement);
      setTimeout(() => {
        alertElement.remove();
      }, 3000);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/rating/create-rating",
        {
          review: review,
          rating: rating,
        }
      );
      console.log(response.data);

      dispatch(addData(response.data));

      // Close the modal
      setModal(false);

      // Reload the component to reflect the updated data
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRating(e.target.value);
  };

  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return (
    <div className="flex justify-between items-center px-3 py-3 relative bg-gray-200 rounded-lg">
      <div className="font-semibold text-3xl">List of Ratings</div>
      <div>
        <button
          className="flex items-center gap-2 py-3 px-3 border-2 border-black rounded-xl font-normal bg-white hover:bg-gray-100 transition-colors duration-300"
          onClick={handleModal}
        >
          <IoMdAddCircleOutline className="text-green-400 size-8" />
          Add Rating
        </button>
        {modal && (
          <div className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Rating:
                </label>
                <select
                  id="rating"
                  value={rating}
                  onChange={handleRatingChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="0">Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="review"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Review:
                </label>
                <textarea
                  id="review"
                  value={review}
                  onChange={handleReviewChange}
                  className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  rows={4}
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
