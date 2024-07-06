"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState , useEffect } from "react";

const FilterByStarCategory = () => {
    const [query, setQuery] = useState([]);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const checked = e.target.checked;

        if(checked){
            setQuery( (prev)=> [...prev, name])
        } else {
            const filtered = query.filter((item)=> item !== name);
            setQuery(filtered)
        }
    }

    // for control reload
    useEffect(()=>{
        const category = params.get("category");
        if(category){
            const decodedCategory = decodeURI(category);
            const queryInCategory = decodedCategory.split("|");
            setQuery(queryInCategory);
        }
    }, [])

    // handleChange work on time
    useEffect(()=>{
        if(query.length > 0){
            params.set("category", encodeURI(query.join('|')));
        } else {
            params.delete("category")
        }

        replace(`${pathname}?${params.toString()}`)
    }, [query])



    return ( 
        <div>
          <h3 className="font-bold text-lg">Star Category</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label for="fiveStar">
            <input 
                type="checkbox"
                name="5"
                checked={query.includes('5')}
                id="fiveStar"
                onChange={handleChange}
            />
                5 Star
            </label>

            <label for="fourStar">
              <input 
              onChange={handleChange} 
              type="checkbox" 
              name="4" 
              checked={query.includes('4')} 
              id="fourStar"
            />
            4 Star
            </label>

            <label for="threeStar">
              <input 
              onChange={handleChange} 
              type="checkbox" 
              name="3"
              checked={query.includes('3')} 
              id="threeStar" 
            />
              3 Star
            </label>

            <label for="twoStar">
              <input 
              onChange={handleChange} 
              type="checkbox" 
              name="2"
              checked={query.includes('2')} 
              id="twoStar" 
            />
            2 Star
            </label>

            <label for="oneStar">
              <input 
              onChange={handleChange} 
              type="checkbox" 
              name="1" 
              checked={query.includes('1')}
              id="oneStar" 
            />
            1 Star
            </label>
          </form>
        </div>
     );
}
 
export default FilterByStarCategory;