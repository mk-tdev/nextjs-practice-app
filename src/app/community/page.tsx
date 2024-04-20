function Community() {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Community</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque blandit, justo ut malesuada dapibus.
            </p>
            <div className="flex items-center">
              <span className="text-gray-600">John Doe</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-700 mb-2">
              Integer ut lorem nec lorem ullamcorper condimentum.
            </p>
            <div className="flex items-center">
              <span className="text-gray-600">Jane Smith</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-700 mb-2">
              Duis vehicula tellus at justo vehicula, eu dignissim risus rutrum.
            </p>
            <div className="flex items-center">
              <span className="text-gray-600">Alice Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
