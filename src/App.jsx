import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDatafromApi } from "./store/cardSlice";
import { fetchDataFromApi } from "./utils/api";
import Card from "./components/Card";

function App() {
  // const [urlData, setUrlData] = useState(null)
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("apple");
  const urlData = useSelector((state) => state.card.data)
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [query])

  const fetchData = async () => {
    try {
      const data = await fetchDataFromApi(query);
      dispatch(getDatafromApi(data?.hits));
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = function(e){
    e.preventDefault();
    setQuery(input);
  }

  return (
    <>
      <form className="flex flex-col justify-center text-center min-h-full" onSubmit={handleSubmit}>
        <div className="mt-[100px] py-[20px]">
        <input className="py-[5px] px-[7px] border-b-2 border-[green] rounded-[4px] focus:outline-none " type="text" placeholder="Search here..." onChange={(e) => setInput(e.target.value)} value={input}/>
        <button className="ml-[20px] py-[6px] px-[16px] text-[#fff] border-none bg-[green] rounded-[10px] hover:bg-[#04db04]" type="submit">Search</button>
        </div>
      </form>
        {!urlData ? <div className="text-center font-semibold text-[24px] mt-[40px]">Not Found...</div>: <div className="my-[40px] flex flex-row flex-wrap justify-center gap-8">
        {urlData?.map((data) => {
          return <Card cardData={data} key={data.id}/>
        })}
        </div>}
    </>
  )
}

export default App;
