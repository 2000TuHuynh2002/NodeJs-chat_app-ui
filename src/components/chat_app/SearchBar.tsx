import { Input } from "@/components/ui-shadcn/input";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="mt-4 mx-4 relative">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 peer-focus:text-gray-900" />
      <Input
        className="py-2 px-10 text-sm rounded-full"
        placeholder="Find user"
      />
    </div>
  );
};

export default SearchBar;