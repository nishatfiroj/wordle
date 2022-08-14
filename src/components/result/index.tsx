import { Stack, Grid, Button, Typography } from "@mui/material"
import React, { useState, useRef } from "react"

type StatusTypes = "success" | "failure"

export const Result = (props: { status: StatusTypes }) => {
  const { status } = props
  return (
    <Grid container padding={4} spacing={1}>
      {status === "success" ? (
        <Typography>YOU WIN!</Typography>
      ) : (
        <Typography>YOU LOSE!</Typography>
      )}
    </Grid>
  )
}
