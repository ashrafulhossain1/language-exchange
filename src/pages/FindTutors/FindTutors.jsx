import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TutorCard from "../../components/TutorCard";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]); // Original list of tutors
  const [sortedTutors, setSortedTutors] = useState([]); // Sorted list of tutors
  const [search, setSearch] = useState("");
  const [fetchingLoad, setFetchingLoad] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          `https://language-express-server-a-10.vercel.app/tutors?search=${search}`
        );
        setTutors(data); // Store the original list
        setSortedTutors(data); // Initialize sorted list with the original data
        setFetchingLoad(false);
      } catch (error) {
        console.error("Error fetching tutors:", error);
        setFetchingLoad(false);
      }
    };
    fetchJobs();
  }, [search]);

  // Function to sort tutors by tutorFee
  const handleSort = () => {
    const sorted = [...sortedTutors].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.tutorFee - b.tutorFee; // Ascending order
      } else {
        return b.tutorFee - a.tutorFee; // Descending order
      }
    });
    setSortedTutors(sorted); // Update the sorted list
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <div className="dark:bg-black text-base-content dark:text-slate-50 min-h-screen">
      <Helmet>
        <title>Find Tutors</title>
      </Helmet>

      {/* Heading Title and Description */}
      <div className="py-8 md:w-1/2 w-full container mx-auto">
        <h1 className="text-lg pb-1 mb-2 flex border-l-2 pl-2 border-[#AFD275] text-gray-800 dark:text-white">
          You can find tutors according to language
        </h1>

        {/* Search Bar and Sort Button */}
        <div className="flex gap-4 items-center">
          {/* Search Input */}
          <label className="input input-bordered flex items-center gap-2 justify-between flex-grow">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow dark:text-black"
              placeholder="Input any Language Name"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:text-slate-50"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* Sort Button */}
          <button
            onClick={handleSort}
            className="btn bg-[#AFD275] hover:bg-[#2F4021] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          >
            {sortOrder === "asc" ? "Sort by Fee (Low to High)" : "Sort by Fee (High to Low)"}
          </button>
        </div>
      </div>

      {/* All Tutors Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 container mx-auto">
        {sortedTutors.map((tutor) => (
          <TutorCard fetchingLoad={fetchingLoad} key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default FindTutors;