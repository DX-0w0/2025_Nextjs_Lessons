import EventItem from './event-item'
import styles from './event-list.module.css'

function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem item={item} />
      ))}
    </ul>
  )
}

export default EventList
