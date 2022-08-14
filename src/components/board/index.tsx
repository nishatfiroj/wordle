import { Stack, Grid, Button } from "@mui/material"
import { AnyAaaaRecord } from "dns"
import React, { useState, useRef } from "react"

export const Board = (props: { children: any }) => {
  const { children } = props
  return (
    <Grid container padding={4} spacing={1}>
      {children}
    </Grid>
  )
}
