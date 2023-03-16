import React from "react";

const OptionBar = (props) => {
  const { options, onSelectOption } = props;
  return (
    <div className="w-full">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black">
        Search
      </label>
      <div class="relative">
        <select id="cars" name="cars" class="block w-full p-[1.1rem] text-base  border border-gray-300 rounded-lg bg-primaryBg   dark:border-gray-600 placeholder-gray-400 text-black" placeholder="Location" required autoComplete="off" onChange={(e) => onSelectOption(e.target.value, options.id)}>
          <option value="" disabled selected hidden>
            {options.name}
          </option>
          {options.data.map((option, i) => (
            <option value={option.value} key={i}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OptionBar;
