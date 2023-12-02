import axios from "axios";
import {useEffect, useState} from "react";
import Card from "./components/Card";

function App() {
  const [urlData, setUrlData] = useState(null)
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState("apple");

  useEffect(() => {
    fetchData();
  }, [inputValue])

  const fetchData = async () => {
    try {
      const data = await axios.get(`https://pixabay.com/api/?key=33083899-1dcf775f0e9ace6580c8b41e1&q=${inputValue}&image_type=photo&pretty=true`);
      setUrlData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = function(e){
    e.preventDefault();
    setInputValue(input);
    setIsSubmit(true);
  }

  return (
    <>
      <form className="flex flex-col justify-center text-center min-h-full" onSubmit={handleSubmit}>
        <div className="mt-[100px] py-[20px]">
        <input className="py-[5px] px-[7px] border-b-2 border-[green] rounded-[4px] focus:outline-none " type="text" placeholder="Search here..." onChange={(e) => setInput(e.target.value)} value={input}/>
        <button className="ml-[20px] py-[6px] px-[16px] text-[#fff] border-none bg-[green] rounded-[10px] hover:bg-[#04db04]" type="submit">Search</button>
        </div>
      </form>
        {!urlData?.hits ? <div>Not Found!</div>: <div className="my-[40px] flex flex-row flex-wrap justify-center gap-8">
        {urlData?.hits?.map((data) => {
          return <Card cardData={data} key={data.id}/>
        })}
        </div>}
    </>
  )
}

export default App;
