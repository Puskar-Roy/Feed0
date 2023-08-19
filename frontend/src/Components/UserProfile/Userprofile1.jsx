function UserProfile1() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-16">
        <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-3">
            <div className="col-span-1 relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                {/* Profile Image SVG or Image */}
              </div>
              <button className="text-white py-2 px-4 rounded-full bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Edit Profile
              </button>
            </div>

            <div className="col-span-2 p-8">
              <h1 className="text-4xl font-medium text-gray-700">
                Jessica Jones
              </h1>
              <p className="font-light text-gray-600 mt-2">
                Bucharest, Romania
              </p>
              <p className="mt-4 text-gray-500">
                Solution Manager - Creative Tim Officer
              </p>
              <p className="mt-1 text-gray-500">
                University of Computer Science
              </p>

              <div className="grid grid-cols-3 mt-8">
                <div className="text-center">
                  <p className="font-bold text-gray-700 text-xl">22</p>
                  <p className="text-gray-400">Following</p>
                </div>

                <div className="text-center">
                  <p className="font-bold text-gray-700 text-xl">10</p>
                  <p className="text-gray-400">Followers</p>
                </div>

                <div className="text-center">
                  <p className="font-bold text-gray-700 text-xl">89</p>
                  <p className="text-gray-400">Posts</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Follow
                </button>
                <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Message
                </button>
              </div>
            </div>
          </div>

          <div className="text-center border-b pb-12 mt-8">
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
          </div>

          {/* User's Posts */}
          <div className="p-6">{/* add user's posts here */}</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile1;
