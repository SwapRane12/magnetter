import { useRouter } from "next/router"
import { useState } from "react"

export default function SearchBox({ }) {
	const router = useRouter()
	const [keyword, setKeyword] = useState('')
	const [category, setCategory] = useState('Movies')

	const handleSearch = (e) => {

		router.push(`/results/${category}/${keyword}`)
	}

	return (


		<div className="container mx-auto flex-col justify-center items-center px-5 py-12 lg:px-20">
			<div
				className=" flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">


				<form onSubmit={(e) => {
					e.preventDefault()
					handleSearch()
					console.log('cat', category, keyword)
				}} className="space-y-6">
					<div>
						<div className="mt-1 flex flex-col gap-4">
							<select
								id="select" name="select" type="text" required=""
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								placeholder="Select type"
								className="  ring-2 ring-offset-gray-300 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out  transform  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700" >
								<option value='Movies' >movies</option>
								<option value='TV' >TV</option>
								<option value='Games' >Games</option>
								<option value='Music' >Music</option>
								<option value='Documentaries' >Documentaries</option>
								<option value='Anime' >Anime</option>
								<option value='Other' >Other</option>
							</select>


							<input
								id="search" name="search" type="text" required=""
								value={keyword}
								onChange={(e) => setKeyword(e.target.value)}
								placeholder="Search Keyword"
								className="  ring-2 ring-offset-gray-300 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out  transform  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700" />
						</div>
					</div>
					<div>
						<button
							type="submit"
							className=" flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> Search
						</button>
					</div>
				</form>
			</div>
		</div>


	)
}