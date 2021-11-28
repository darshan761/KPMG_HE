import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Countdown = (props) => (
  <CountdownCircleTimer
    isPlaying={props.play}
    duration={props.duration}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
)

export default Countdown;