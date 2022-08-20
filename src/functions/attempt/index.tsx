import { Stack, Grid, Button, TextField } from "@mui/material"
import React, { useEffect, useRef, useState, useLayoutEffect } from "react"

type AttemptBase = {
  attempt: string
  attemptContainer: JSX.Element
}

const inputStyle = {
  width: "60px",
  height: "60px",
  fontSize: "30px",
  textAlign: "center" as "center",
  border: "1px solid white",
  borderRadius: "4px",
  margin: 2,
  color: "white",
}

export const createAttempt = (answer: string, active: boolean): AttemptBase => {
  const first: React.Ref<any> = useRef(null)
  const second: React.Ref<any> = useRef(null)
  const third: React.Ref<any> = useRef(null)
  const fourth: React.Ref<any> = useRef(null)
  const fifth: React.Ref<any> = useRef(null)

  const [attempt, setAttempt] = useState("")
  const [colorMap, setColorMap] = useState<string[]>([])

  useEffect(() => {
    setTimeout(() => setColorMap(buildColorMap), 100)
  }, [attempt])

  const handleAttempt = (e: any) => {
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
      // this is running BEFORE attempt has a value
    }
  }

  const buildColorMap = () => {
    let colorResult = []
    for (let i = 0; i < attempt.length; i++) {
      if (attempt[i] == answer[i]) {
        colorResult.push("green")
      } else {
        colorResult.push("red")
      }
    }
    console.log("colorResult", colorResult)
    return colorResult
  }

  const handleLetterInput = (e: any) => {
    const form = e.target.form
    const index = [...form].indexOf(e.target)
    form.elements[index + 1].focus()

    e.preventDefault()
  }

  const attemptContainer = (
    <Grid container padding={1} spacing={1}>
      <Grid item>
        <Stack direction="row" spacing={2}>
          <form>
            <input
              disabled={!active}
              type="text"
              onChange={(e) => handleLetterInput(e)}
              style={{
                ...inputStyle,
                backgroundColor: colorMap[0] || "transparent",
              }}
              // style={inputStyle}
              maxLength={1}
              ref={first}
            ></input>
            <input
              disabled={!active}
              type="text"
              onChange={(e) => handleLetterInput(e)}
              // style={inputStyle}
              style={{
                ...inputStyle,
                backgroundColor: colorMap[1] || "transparent",
              }}
              maxLength={1}
              ref={second}
            ></input>
            <input
              disabled={!active}
              type="text"
              onChange={(e) => handleLetterInput(e)}
              // style={inputStyle}
              style={{
                ...inputStyle,
                backgroundColor: colorMap[2] || "transparent",
              }}
              maxLength={1}
              ref={third}
            ></input>
            <input
              disabled={!active}
              type="text"
              onChange={(e) => handleLetterInput(e)}
              // style={inputStyle}
              style={{
                ...inputStyle,
                backgroundColor: colorMap[3] || "transparent",
              }}
              maxLength={1}
              ref={fourth}
            ></input>
            <input
              disabled={!active}
              type="text"
              // style={inputStyle}
              style={{
                ...inputStyle,
                backgroundColor: colorMap[4] || "transparent",
              }}
              maxLength={1}
              ref={fifth}
            ></input>
            {active && (
              <Button type="submit" onClick={handleAttempt}>
                Enter
              </Button>
            )}
          </form>
        </Stack>
      </Grid>
    </Grid>
  )

  return { attemptContainer, attempt }
}
