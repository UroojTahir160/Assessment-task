import React from "react";

export const SearchInput = () => {
  return (
    <div className="flex gap-2">
      <div className="w-[470px] bg-white rounded-[5px] flex items-center py-[8px] px-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          className="ml-2 mr-3 text-gray-400"
        >
          <path
            d="M14.2939 12.5786H13.3905L13.0703 12.2699C14.2297 10.9251 14.8669 9.20834 14.8656 7.43282C14.8656 5.96275 14.4297 4.52569 13.613 3.30337C12.7963 2.08105 11.6354 1.12837 10.2772 0.565793C8.91907 0.00322052 7.42457 -0.143974 5.98275 0.142823C4.54092 0.42962 3.21652 1.13753 2.17702 2.17702C1.13753 3.21652 0.42962 4.54092 0.142823 5.98275C-0.143974 7.42457 0.00322052 8.91907 0.565793 10.2772C1.12837 11.6354 2.08105 12.7963 3.30337 13.613C4.52569 14.4297 5.96275 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z"
            fill="#777777"
          />
        </svg>
        <input
          type="text"
          className="flex-1 outline-none text-black"
          placeholder="Search by Course"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="41"
          viewBox="0 0 2 41"
          fill="none"
          className="mx-2 text-gray-400"
        >
          <path d="M1 0V40.5" stroke="#8A8A8A" />
        </svg>
        <select className="p-2 outline-none text-black border-none">
          <option value="Course">Course</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <button className="bg-primary-green-400 text-black px-4 py-2 rounded-md ml-2 hover:bg-green-400 transition duration-300 ease-in-out">
        Search
      </button>
    </div>
  );
};
