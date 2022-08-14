import { Stack, Grid, Button, TextField } from "@mui/material"
import React, { useRef, useState } from "react"

type AttemptBase = {
  attempt: string
  attemptContainer: JSX.Element
}

const inputStyle = {
  width: "60px",
  height: "60px",
  fontSize: "30px",
  textAlign: "center" as "center",
  margin: 2,
}

export const createAttempt = (answer: string): AttemptBase => {
  const first: React.Ref<any> = useRef(null)
  const second: React.Ref<any> = useRef(null)
  const third: React.Ref<any> = useRef(null)
  const fourth: React.Ref<any> = useRef(null)
  const fifth: React.Ref<any> = useRef(null)

  const [attempt, setAttempt] = useState("")

  let colorMap = new Array(5).fill("red")

  const handleAttempt = (e: any) => {
    e.preventDefault()

    // build string
    let buildAttempt: string =
      first.current.value +
      second.current.value +
      third.current.value +
      fourth.current.value +
      fifth.current.value

    // set string as valid
    if (buildAttempt.length < 5 || /\d/.test(buildAttempt)) {
      alert("Your input must be 5 alphabetic characters long.")
    } else {
      setAttempt(buildAttempt)
      evaluateAttempt(e)
      console.log(colorMap)
    }
  }

  const evaluateAttempt = (e: any) => {
    for (let i = 0; i < attempt.length; i++) {
      if (attempt[i] === answer[i]) {
        colorMap[i] = "green"
      }
    }
  }

  const handleLetterInput = (e: any) => {
    const form = e.target.form
    const index = [...form].indexOf(e.target)
    form.elements[index + 1].focus()

    e.preventDefault()
  }

  const attemptContainer = (
    <Grid container padding={4} spacing={1}>
      <Grid item>
        <Stack direction="row" spacing={1}>
          <form>
            <input
              onChange={(e) => handleLetterInput(e)}
              style={inputStyle}
              maxLength={1}
              ref={first}
            ></input>
            <input
              onChange={(e) => handleLetterInput(e)}
              style={inputStyle}
              maxLength={1}
              ref={second}
            ></input>
            <input
              onChange={(e) => handleLetterInput(e)}
              style={inputStyle}
              maxLength={1}
              ref={third}
            ></input>
            <input
              onChange={(e) => handleLetterInput(e)}
              style={inputStyle}
              maxLength={1}
              ref={fourth}
            ></input>
            <input style={inputStyle} maxLength={1} ref={fifth}></input>
            <Button type="submit" onClick={handleAttempt}>
              Enter
            </Button>
          </form>
        </Stack>
      </Grid>
    </Grid>
  )

  return { attemptContainer, attempt }
}
