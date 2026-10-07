const technologies = async () => {
  const response = await fetch("/technologies.json");
  const data = await response.json();
  // console.log('Technologies:', data);
  return data;
};

const data = await technologies();
console.log(data);

const ExploreTec = () => {
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
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <button className="btn btn-neutral my-3">Add to Stack</button>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
};

export default ExploreTec;
