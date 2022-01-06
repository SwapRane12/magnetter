import ResultList from "../../components/ResultList"
import MainLayout from "../../layouts/MainLayout"

export default function Results() {
  return (
    <div>
      <div className=" flex flex-row justify-center items-center w-full h-10 uppercase text-2xl font-bold bg-blue-500 text-white flex-grow " > Results</div>

      <MainLayout>
        <div className=" w-full  flex flex-col justify-start items-center " >
          <ResultList />
        </div>

      </MainLayout>
    </div>
  )
}