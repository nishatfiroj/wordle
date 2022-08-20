import { Stack, Grid, Button } from "@mui/material"
import { createAttempt } from "../../functions"
import React, { useState, useRef } from "react"

export const Board = (props: { answer: string }) => {
  const { answer } = props

  let try1 = createAttempt(answer, true)
  let try2 = createAttempt(answer, false)
  let try3 = createAttempt(answer, false)
  let try4 = createAttempt(answer, false)
  let try5 = createAttempt(answer, false)
  let try6 = createAttempt(answer, false)

  if (
    try1.attempt == answer ||
    try2.attempt == answer ||
    try3.attempt == answer ||
    try4.attempt == answer ||
    try5.attempt == answer ||
    try6.attempt == answer
  )
    alert("You win!")

  return (
    <Grid container padding={4} spacing={1}>
      {try1.attemptContainer}
      {try2.attemptContainer}
      {try3.attemptContainer}
      {try4.attemptContainer}
      {try5.attemptContainer}
      {try6.attemptContainer}
    </Grid>
  )
}
