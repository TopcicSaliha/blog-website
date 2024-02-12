import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRelatedBlogs } from "../../redux/features/relatedBlogs/relatedBlogsSlice";
import RelatedBlogCard from "./RelatedBlogs";

// eslint-disable-next-line react/prop-types
const PopularBlogs = ({ tags, currentBlogId }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [dispatch, tags, currentBlogId]);

  return (
    <section className="text-gray-600 mt-12">
      <h2 className="text-3xl font-bold">Popular Blogs</h2>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {relatedBlogs.length &&
            relatedBlogs
              .slice(0, 3)
              .map((blog, index) => (
                <RelatedBlogCard blog={blog} key={index} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBlogs;
