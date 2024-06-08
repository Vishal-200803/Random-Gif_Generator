import Random from "./components/Random"
import Tag from "./components/Tag"

function App() {
  return (
    <div className="App background w-full flex flex-col relative items-center">
      <h1 className='absoulte bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold'> Random GIFS      </h1>
      <div className='flex flex-col w-full items-center'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
