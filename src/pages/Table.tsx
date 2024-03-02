/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, Key, SetStateAction, useState } from "react";
import useRating from "../hooks/useRating";
import { useSelector } from "react-redux";
import axios from "axios";
import useCount from "../hooks/useCount";

const Table = () => {
  const ratingData = useSelector((store: any) => store.rating.getRating);
  const countData=useSelector((store:any)=>store.rating.getCount)
  console.log(countData?.data?.addAPiCount)
  const [Id, setId] = useState<string>("-1");
  const [updateReview, setUpdateReview] = useState<string>("");
  const [updateRating, setUpdateRating] = useState<string>("");
  useRating();
  useCount();
  const handleEdit = async (id: SetStateAction<string>) => {
    console.log(id);
    await axios
      .get("https://dataneuronapi.onrender.com/api/v1/rating/get-by-id/" + id)
      .then((res) => {
        console.log(res);
        setUpdateReview(res?.data?.data?.review);
        setUpdateRating(res.data?.data?.rating);
      })
      .catch((err) => console.log(err));
    setId(id);
  };

  const handleRating = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateRating(e.target.value);
  };
  const handleReview = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateReview(e.target.value);
  };
  const handleSubmit = async () => {
    await axios
      .put("https://dataneuronapi.onrender.com/api/v1/rating/update-rating/" + Id, {
        id: Id,
        review: updateReview,
        rating: updateRating,
      })
      .then((res) => {
        console.log(res);
        location.reload();
        setId("-1");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start">
      <h1 className="text-2xl font-bold mb-4">Rating Data</h1>
      <div className="py-3 px-3 flex flex-col items-center">
      <p>Add Count:{countData?.data?.addAPiCount}</p>
      <p>Update Count:{countData?.data?.updateAPiCount}</p>
      </div>
     
      </div>
      
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Review</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {ratingData?.data?.map(
              (
                item: {
                  id: string;
                  review: string;
                  rating: string;
                },
                index: Key | null | undefined
              ) =>
                item.id === Id ? (
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      <input
                        type="text"
                        value={updateReview}
                        onChange={(e) => handleReview(e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={updateRating}
                        onChange={(e) => handleRating(e)}
                      />
                    </td>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={handleSubmit}
                    >
                      Update
                    </button>
                  </tr>
                ) : (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">{item.review}</td>
                    <td className="border px-4 py-2">{item.rating}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                     
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
