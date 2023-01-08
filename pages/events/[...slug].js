import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import ErrorAlert from '../../components/EventDetail/ErrorAlert'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/EventDetail/ResultsTitle'

const FilteredIventsPage = () => {
  const router = useRouter()

  const filterData = router.query.slug
  console.log(filterData);

  if (!filterData) return <p className='center'>Loading...</p>

  const filterYear = +filterData[0];
  const filterMonth = +filterData[1]

  if (isNaN(filterYear) || isNaN(filterMonth)) return <ErrorAlert>Invalid Filter</ErrorAlert>

  const events = getFilteredEvents({ year: filterYear, month: filterMonth })

  if (!events || !events.length) return <ErrorAlert>No such events</ErrorAlert>

  const date = new Date(filterYear, filterMonth)

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  )
}

export default FilteredIventsPage