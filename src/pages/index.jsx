import SearchBox from '../components/SearchBox'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
	return (
		<MainLayout>
			<div className="flex min-h-screen items-center" >
				<SearchBox />
			</div>
		</MainLayout>

	)
}
