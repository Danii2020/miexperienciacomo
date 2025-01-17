const Switch = () => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" defaultChecked={true} />
            <div className="w-9 h-5 bg-gray-400 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full
         peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4
         after:w-4 after:transition-all peer-checked:bg-gray-700 hover:peer-checked:bg-gray-700"></div>
        </label>
    )
}

export default Switch
