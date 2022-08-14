import { Stack, Grid, Button, TextField } from "@mui/material"
import React, { useRef, useState } from "react"

type AttemptBase = {
  attempt: string
  attemptContainer: JSX.Element
}

export const createAttempt = (): AttemptBase => {
  const first: React.Ref<any> = useRef(null)
  const second: React.Ref<any> = useRef(null)
  const third: React.Ref<any> = useRef(null)
  const fourth: React.Ref<any> = useRef(null)
  const fifth: React.Ref<any> = useRef(null)

  const [attempt, setAttempt] = useState("")

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
      console.log("will not accept")
    } else {
      setAttempt(buildAttempt)
    }
  }

  const attemptContainer = (
    <Grid container padding={4} spacing={1}>
      <Grid item>
        <Stack direction="row" spacing={1}>
          <input maxLength={1} ref={first}></input>
          <input maxLength={1} ref={second}></input>
          <input maxLength={1} ref={third}></input>
          <input maxLength={1} ref={fourth}></input>
          <input maxLength={1} ref={fifth}></input>
          <Button onClick={handleAttempt}>Enter</Button>
        </Stack>
      </Grid>
    </Grid>
  )

  return { attemptContainer, attempt }
}
