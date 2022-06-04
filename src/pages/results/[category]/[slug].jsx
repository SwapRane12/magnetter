import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ResultList from "../../../components/ResultList"
import MainLayout from "../../../layouts/MainLayout"

export default function Results() {
  const router = useRouter()
  const [list, setList] = useState([])
  const { slug, category } = router.query

  const getResults = async () => {
    const results = await axios.get(`/api/torrent/search/${category}/${slug}`)
    if (results.status === 200) {

      const data = results.data
      console.log(data)
      setList(data)

    }

  }

  useEffect(() => {
    console.log("slugs", slug, category)
    getResults()
  }, [slug])


  return (
    <div>
      <div className=" flex flex-row justify-center items-center w-full h-10 uppercase text-2xl font-bold bg-blue-500 text-white flex-grow " > Results</div>
      <MainLayout>
        <div className=" w-full  flex flex-col justify-start items-center " >
          <ResultList list={list} />
        </div>

      </MainLayout>
    </div>
  )
}