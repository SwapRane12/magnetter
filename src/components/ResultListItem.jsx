export default function ResultListItem({ item }) {

	return (
		<div className="border border-gray-400 w-full  rounded-lg p-2 flex flex-col justify-start items-start" >
			<div>
				Avengers endgame
			</div>
			<div className=" my-2 border-b border-blue-300 w-full" />
			<div className="flex flex-col gap-1  w-full p-2 justify-between" >
				<div className="flex flex-row w-full  justify-between  " >
					<div>
						<span className="text-teal-600" >size : </span> 1.5gb
					</div>
					<div>
						<span className="text-orange-500" >seeds : </span>
						2548
					</div>
					<div>
						<span className="text-red-500" >	leeches : </span> 4582
					</div>
				</div>
				<div className=" my-2 border-b border-blue-300 w-full" />
				<div className="flex flex-row gap-4 items-center justify-between " >
					<div>
						<span className="text-pink-600" >	date : </span> Jul. 29th '19
					</div>
					<div>
						<button className="bg-blue-500 py-1 px-2 rounded-md text-white font-bold " >Details</button>
					</div>
				</div>
			</div>
		</div>
	)
}