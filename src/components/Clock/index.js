import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'
import {useState, useEffect} from 'react'

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      //above line used to call setinterval for every 1/ 1000 milli seconds
      setCurrentDate(new Date())
      //above line used to set current tim and using Date constructor for every 1/ 1000 milli seconds
    }, 1000)
    //console.log('Set Interval Call')
    return () => {
      //above line used to unmount and clear the timer using return callback
      clearInterval(timerId)
      //console.log('Clear Interval Call')
    }
  }, [])

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time>{currentDate.toLocaleTimeString()}</Time>
    </ClockContainer>
  )
}

export default Clock
