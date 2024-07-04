"use client";
import { useState, useEffect } from "react";
import { useSearchParams ,usePathname , useRouter } from "next/navigation";
// import { allCities } from "@/database/queries/hotels";

const Search = ({fromList, destination, checkin , checkout }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('/api/allcities');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const citiesData = await response.json();
        setCities(citiesData);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const [searchTerm, setSearchTerm] = useState({
    'destination': destination || 'Puglia',
    'checkin': checkin,
    'checkout': checkout
  })

  const [allowSearch, setAllowSearch] = useState(true)

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const state = {...searchTerm, [name]: value}

    if( new Date(state.checkin).getTime() > new Date(state.checkout).getTime() ){
      setAllowSearch(false)
    } else {
      setAllowSearch(true)
    }

    setSearchTerm(state)
  }

  function handleSearch(e){
    const params = new URLSearchParams(searchParams);

    params.set('destination', searchTerm?.destination || "all");
    
    if(searchTerm?.checkin && searchTerm?.checkout){
      params.set('checkin', searchTerm?.checkin);
      params.set('checkout', searchTerm?.checkout);
    }

    // url path wise url replace like
    if(pathname.includes("hotels")){
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
    
  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select 
                name="destination" 
                id="destination"
                defaultValue={searchTerm.destination}
                onChange={handleInput}
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.city}>{city.city}</option>
                ))}
                {/* <option value="Puglia">Puglia</option>
                <option value="Catania">Cantania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
                <option value="Cergy">Cergy</option> */}
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input value={searchTerm.checkin} onChange={handleInput} type="date" name="checkin" id="checkin" />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input value={searchTerm.checkout} onChange={handleInput} type="date" name="checkout" id="checkout" />
            </h4>
          </div>
        </div>
      </div>

      <button 
        disabled={!allowSearch} 
        className="search-btn"
        onClick={handleSearch}
      >🔍️ {fromList ? "Modify Search": "Search"}</button>
    </>
  );
};

export default Search;
