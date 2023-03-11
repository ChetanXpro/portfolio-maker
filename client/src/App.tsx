import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import { Home, Templates, PublishedPage, Editor } from './pages';
import Layout from './pages/Layout/Layout';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/portfolios' element={<Portfolio />} />
        </Route>
        <Route path='/:id' element={<PublishedPage />} />
      </Routes>

    </div>
  )
}

export default App
