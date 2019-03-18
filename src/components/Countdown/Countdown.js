import React from "react"
import FlipClock from "x-react-flipclock"
import "../../css/Countdown.css"

var bgStyle = {
  opacity: 0.8,
}

const Countdown = () => (
  <div
    className="flex-col-c respon1 p-t-30 p-b-30 p-l-30 p-r-30 bg-light"
    style={bgStyle}
  >
    <div>
      {typeof window !== "undefined" && FlipClock && (
        <FlipClock
          type="countdown"
          count_to="2019-05-01 17:00:00"
          units={[
            {
              sep: "",
              type: "days",
              title: "DAYS",
            },
            {
              sep: " ",
              type: "hours",
              title: "HOURS",
            },
            {
              sep: ":",
              type: "minutes",
              title: "MINS",
            },
            {
              sep: ":",
              type: "seconds",
              title: "SECS",
            },
          ]}
        />
      )}
    </div>
  </div>
)

export default Countdown
