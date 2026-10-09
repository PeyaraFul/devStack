import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const technologies = async () => {
  const response = await fetch("/technologies.json");
  const data = await response.json();
  // console.log('Technologies:', data);
  return data;
};

const data = await technologies();
console.log(data);

const ExploreTec = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState(() => {
    const savedTechnologies = localStorage.getItem("selectedTechnologies");

    return savedTechnologies ? JSON.parse(savedTechnologies) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "selectedTechnologies",
      JSON.stringify(selectedTechnologies),
    );
  }, [selectedTechnologies]);

  const handleAddToStack = (technology) => {
    if (selectedTechnologies.find((item) => item.id === technology.id)) {
      toast.error("The same technology cannot be added twice.");
      return;
    }
    setSelectedTechnologies((prev) => [...prev, technology]);
  };

  const removeTechno = (technology) => {
    setSelectedTechnologies((prev) =>
      prev.filter((item) => item.id !== technology.id),
    );
    toast.success("Technology removed from stack.");
  };

  const handleRemoveAll = () => {

    setSelectedTechnologies([]);
    toast.success("All technologies removed from stack.");
  };
  console.log("selectedTechnologies", selectedTechnologies);

  return (
    <>
      <h1 className="text-3xl font-bold mt-10 text-black">
        Explore the{" "}
        <span className="bg-transparent bg-linear-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
          Technologies{" "}
        </span>
      </h1>
      <p className="text-black py-4">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="md:flex justify-space-between  gap-4">
        {/* explore technologies */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((technology) => (
            <div key={technology.id} className="card text-black shadow-xl">
              <div className="card-body">
                <img
                  src={technology.icon}
                  width="30"
                  height="30"
                  alt={technology.name}
                />
                <h2 className="card-title">{technology.name}</h2>
                <div className="badge bg-green-100 text-green-400 absolute right-2 top-2">
                  {technology.badge}
                </div>
                <p className="card-text text-gray-500">
                  {technology.description}
                </p>
                <div className="flex justify-between">
                  <div className=" bg-gray-200 px-2 rounded-md ">
                    {technology.category}
                  </div>
                  <div className="border-gray-200 border px-2 rounded-md">
                    {technology.difficulty}
                  </div>

                  <div className="px-2 bg-gray-100">⭐{technology.rating}</div>
                </div>
                <button
                  onClick={() => handleAddToStack(technology)}
                  className="btn btn-neutral my-3"
                >
                  {selectedTechnologies.find((item) => item.id === technology.id)
                    ? "✅ Added to Stack"
                    : "Add to Stack"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* your stack */}
        <div className="text-black sm: w-full shadow-lg md:w-2/3 border-amber-400 p-2 max-w-2xl px-4">
          <h1 className="text-2xl font-bold text-black">Your Stack</h1>
          <p className="text-black py-4">
            {selectedTechnologies.length === 0 ? (
            <p className="text-gray-400  text-center  ">
            No technologies selected yet.
            </p>
            ) : (
              <p className="text-black ">
                You have selected {selectedTechnologies.length} technologies.
              </p>
            )}
          </p>

          <div className="grid grid-cols-1 text-black gap-4">

          {selectedTechnologies.length === 0 ? (
              <p className="text-gray-400 font-semibold text-center rounded-xl border border-gray-200 p-10">Your stack is empty.</p>
            ) : (  
              <>        
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className=" shadow-xl p-2  text-black shadow-xl"
              >
                <div className="  gap-6 relative flex px-1">
                  <button
                    onClick={() => removeTechno(technology)}
                    className="absolute right-2 rounded-full flex items-center justify-center w-6 h-6 bg-gray-100 text-red-400 cursor-pointer"
                  >
                    {" "}
                    x{" "}
                  </button>
                  <img
                    src={technology.icon}
                    width="30"
                    height="30"
                    alt={technology.name}
                  />

                  <div className="">
                    <h2 className="card-title">{technology.name}</h2>

                    <div className="flex justify-between">
                      <div className="text-gray-400">{technology.category}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={handleRemoveAll}
              className="border-red-400 border-2 rounded-md px-4 py-2 text-red-400 hover:bg-red-400 hover:text-white cursor-pointer"
            >
              Remove All
            </button>

              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default ExploreTec;
