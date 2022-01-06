import axios from "axios"
import { useState } from "react"
import Loader from "./Loader"

export default function ResultListItem({ item }) {
	const [magnet, setMagnet] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const getMagnet = async () => {
		setIsLoading(true)
		const response = await axios.post(`/api/torrent/get-magnet`, item)
		if (response.status === 200) {
			const data = response.data
			console.log(data)
			setMagnet(data.magnet)
		}
		setIsLoading(false)
	}


	return (
		<div className="border my-3 border-gray-400 w-full  rounded-lg p-2 flex flex-col justify-start items-start" >
			<div>
				{item?.title}
			</div>
			<div className=" my-1 border-b border-blue-300 w-full" />
			<div className="flex flex-col gap-1  w-full p-2 justify-between" >
				<div className="flex flex-row w-full  justify-between  " >
					<div>
						<span className="text-teal-600" >size : </span> {item?.size}
					</div>
					<div>
						<span className="text-orange-500" >seeds : </span> {item?.seeds}

					</div>
					<div>
						<span className="text-red-500" >	leeches : </span> {item?.peers}
					</div>
				</div>
				<div className=" my-1 border-b border-blue-300 w-full" />
				<div className="flex flex-row gap-4 items-center justify-between " >
					<div>
						<span className="text-pink-600" >	date : </span> {item?.time}
					</div>
					{!isLoading && !magnet.length ? <div>
						<button
							onClick={async (e) => {
								e.preventDefault()
								await getMagnet()
							}}
							className="bg-blue-500 py-1 px-2 rounded-md text-white font-bold " >Details</button>
					</div> : null

					}

				</div>
				<div className=" my-1 border-b border-blue-300 w-full" />
				{isLoading
					? <Loader /> : magnet.length
						? <div className="flex flex-row gap-4 items-center justify-between " >
							<div>
								<span className="text-orange-600" >	Click Button to Copy Magnet Link  &#129522;</span>
							</div>
							<div>
								<button
									onClick={(e) => {
										navigator.clipboard.writeText(magnet)
									}}
									className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 py-1 px-2 rounded-md text-white font-bold " >Copy</button>
							</div>
						</div> : null}



				{/* {
					magnet && !isLoading ? (<div className="flex flex-row gap-4 items-center justify-between " >
						<div>
							<span className="text-orange-600" >	Click Button to Copy Magnet Link  &#129522;</span>
						</div>
						<div>
							<button className="bg-orange-500 py-1 px-2 rounded-md text-white font-bold " >Copy</button>
						</div>
					</div>) : null
				} */}

			</div>
		</div>
	)
}