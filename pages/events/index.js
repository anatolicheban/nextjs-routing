import EventList from "../../components/events/EventList"
import EventSearch from "../../components/events/EventSearch"
import { getAllEvents } from "../../dummy-data"
import { useRouter } from "next/router"

const AllEventsPAge = () => {
  const events = getAllEvents()
  const router = useRouter()

  const findEvents = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <>
      <EventSearch onSearch={findEvents} />
      <EventList items={events} />
    </>
  )

}

export default AllEventsPAge