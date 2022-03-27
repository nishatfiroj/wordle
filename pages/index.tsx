import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { TextField, Stack, Grid, Button } from '@mui/material'
import React, { useState, useRef } from 'react'


const Home: NextPage = () => {
  const first = useRef(null);
  const [firstValue, setFirstValue] = useState<any>(first)

  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const fifth = useRef(null);

  const word: string = 'horse'

  const handleWord = () => {
    setFirstValue(first.current?.value)
    console.log('word', firstValue)
  }

  return (
    <Grid container padding={4} spacing={1}>
      <Grid item>
        <Stack direction='row' spacing={1}>
          <TextField ref={first}></TextField>
          <TextField ref={second}></TextField>
          <TextField ref={third}></TextField>
          <TextField ref={fourth}></TextField>
          <TextField ref={fifth}></TextField>
          <Button onClick={handleWord}>Enter</Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Home

