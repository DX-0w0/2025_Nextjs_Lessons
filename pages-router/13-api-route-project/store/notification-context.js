import { createContext, useEffect, useState } from 'react'

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (data) {},
  hideNotification: function () {},
})

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState()

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        hideNotificationHandler()
      }, 3000)

      // Cleanup if it gets run again before the timeout elapse
      return () => {
        clearTimeout(timer)
      }
    }
  }, [activeNotification])

  function showNotificationHandler(data) {
    // setActiveNotification({
    //   title: data.title,
    //   message: data.message,
    //   status: data.status,
    // })

    setActiveNotification(data)
  }

  function hideNotificationHandler() {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
