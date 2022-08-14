import type { NextPage } from "next"
import React, { useState, useRef } from "react"
import { Board, Result } from "../src/components"
import { createAttempt } from "../src/functions"

const testWord: string = "horse"

const Home: NextPage = () => {
  const [currentAttempt, setCurrentAttempt] = useState("")
  const [attemptNumber, setAttemptNumber] = useState(0)
  const { attempt, attemptContainer } = createAttempt()

  // const handleGame = (attempt: string) => {
  // const createdAttempt = createAttempt()

  // if (attemptNumber < 6 && currentAttempt != testWord) {
  //   setCurrentAttempt(attempt)
  //   setAttemptNumber(attemptNumber + 1)
  //   return createdAttempt.attemptContainer
  // }

  // if (attemptNumber >= 6 && currentAttempt != testWord) {
  //   return <Result status="failure" />
  // }

  // if (currentAttempt == testWord) {
  //   return <Result status="success" />
  // }
  // }

  return (
    <Board>
      {attemptContainer}
      {attempt == testWord && <Result status="success" />}
    </Board>
  )
}

export default Home
