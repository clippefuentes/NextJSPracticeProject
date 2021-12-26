import { useRouter } from "next/router"

const EventIdComponent = ({}) => {
  const router = useRouter()
  
  console.log('router.query:', router.query)
  return <div>
    EVENT ID COMPONENT
  </div>
}

export default EventIdComponent