import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import ErrorAlert from '../../components/EventDetail/ErrorAlert'
import EventSummary from '../../components/EventDetail/EventSummary'
import EventLogistics from '../../components/EventDetail/EventLogistics'
import EventContent from '../../components/EventDetail/EventContent'

const EventDetailPage = () => {

  const router = useRouter()
  const eventId = router.query.eventId

  const event = getEventById(eventId)

  if (!event) return <ErrorAlert>No such events!</ErrorAlert>

  const { title, date, location, image } = event

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export default EventDetailPage