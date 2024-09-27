import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from "./MailboxForm"
import MailboxList from "./components/MailboxList"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import "./App.css"


// src/App.jsx

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = () => {
    setMailboxes()
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  )
}

export default App