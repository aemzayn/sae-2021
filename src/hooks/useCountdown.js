import { useState } from 'react'

export const useCountdown = date => {
  const [time, setTime] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })
  const [end, setEnd] = useState(false)

  var countDownDate = new Date(date).getTime()

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime()

    // Find the distance between now and the count down date
    var distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    setTime({ days, hours, minutes, seconds })

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x)
      setEnd(true)
    }
  }, 1000)

  return {
    time,
    end,
  }
}

export default useCountdown
