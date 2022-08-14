import type { NextPage } from "next"
import React, { useState, useRef } from "react"
import { Board, Result } from "../src/components"

const testWord: string = "horse"

const Home: NextPage = () => {
  return <Board answer={testWord} />
}

export default Home
