
import ResultListItem from "./ResultListItem"


export default function ResultList({ list }) {



	return (
		<div className="mt-4 w-full " >
			{list.map((item, index) => <ResultListItem item={item} key={index} />)}

		</div>
	)
}