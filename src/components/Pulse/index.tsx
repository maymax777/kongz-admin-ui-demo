const Pulse = () => {
  return (
    <div className="m-8 mx-auto w-full rounded-md border border-gray-300 p-4 shadow">
      <div className="flex animate-pulse space-x-4">
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-6 py-1">
          {new Array(10).fill(0).map((_, index) => (
            <div key={'pulse-' + index}>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 h-2 rounded bg-gray-300"></div>
                <div className="col-span-1 h-2 rounded bg-gray-300"></div>
                <div className="col-span-1 h-2 rounded bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pulse
