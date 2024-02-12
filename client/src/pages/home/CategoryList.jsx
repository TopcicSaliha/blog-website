import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected } from "../../redux/features/filters/filterSlice";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const isTagSelected = (tag) => selectedTags.includes(tag);
  return (
    <div className="mb-4">
      <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
        {" "}
        Popular Topics{" "}
      </h5>
      <ul>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
           ${isTagSelected("AI") ? "selected bg-indigo-300 rounded" : ""}`}
        >
          <a
            onClick={() => dispatch(tagSelected("AI"))}
            className="flex items-center text-gray-600 cursor-pointer"
          >
            <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
            AI
            <span className="text-gray-500 ml-auto">23 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
           ${
             isTagSelected("Startups") ? "selected bg-indigo-300 rounded" : ""
           }`}
        >
          <a
            onClick={() => dispatch(tagSelected("Startups"))}
            className="flex items-center text-gray-600 cursor-pointer"
          >
            <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
            Startups
            <span className="text-gray-500 ml-auto">18 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
           ${
             isTagSelected("Security") ? "selected bg-indigo-300 rounded" : ""
           }`}
        >
          <a
            onClick={() => dispatch(tagSelected("Security"))}
            className="flex items-center text-gray-600 cursor-pointer"
          >
            <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
            Security
            <span className="text-gray-500 ml-auto">34 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
           ${isTagSelected("Apps") ? "selected bg-indigo-300 rounded" : ""}`}
        >
          <a
            onClick={() => dispatch(tagSelected("Apps"))}
            className="flex items-center text-gray-600 cursor-pointer"
          >
            <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
            Apps
            <span className="text-gray-500 ml-auto">9 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
