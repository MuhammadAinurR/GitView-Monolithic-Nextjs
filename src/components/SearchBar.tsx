import { SearchBarPropsType } from "@/types";

const SearchBar = ({ org, onOrgChange, onSearch }: SearchBarPropsType) => (
    <div className="md:flex justify-end mt-[2rem] gap-2">
        <input
            type="text"
            value={org}
            onChange={onOrgChange}
            placeholder="Enter organization (ex: Apache, Facebook, Microsoft)"
            className="rounded bg-black px-4 py-2 w-full outline-none"
        />
        <button
            className="border-[#373E47] rounded-md border-[1px] mt-2 md:mt-0 w-full md:w-1/5 xl:w-1/12"
            onClick={onSearch}
        >
            Search Organization
        </button>
    </div>
);

export default SearchBar;
