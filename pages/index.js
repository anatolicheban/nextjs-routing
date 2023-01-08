import React from 'react'
import EventList from '../components/events/EventList'
import { getFeaturedEvents } from '../dummy-data'

const FeaturedEventsPage = () => {

  const featuredIvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredIvents} />
    </div>
  )
}

export default FeaturedEventsPage