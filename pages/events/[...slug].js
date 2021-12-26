import { useRouter } from "next/router"

const FilterEventComponent = ({}) => {
  const router = useRouter()
  
  console.log('router.query:', router.query)
  return <div>
    Filted Event Page
  </div>
}

export default FilterEventComponent