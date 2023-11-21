import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SearchContext = createContext({
  searchValue: "",
  setSearchValue: () => {},
});

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    // console.log(searchValue);
  }, [searchValue]);
  return (
    <SearchContext.Provider
      value={useMemo(
        () => ({ searchValue, setSearchValue }),
        [searchValue, setSearchValue]
      )}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  return useContext(SearchContext);
};

export default useSearch;
