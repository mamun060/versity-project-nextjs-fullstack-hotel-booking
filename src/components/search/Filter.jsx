import FilterByAmenities from "./FilterByAmenities";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByStarCategory from "./FilterByStarCategory";
import SortHotel from "./SortHotel";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <SortHotel />
        <FilterByPriceRange />
        <FilterByStarCategory />
        <FilterByAmenities />
      </div>
    </>
  );
};

export default Filter;
