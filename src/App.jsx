import { useState, useEffect } from 'react'
import SearchTab from './components/SearchTab/SearchTab'
import RateTab from './components/RateTab/RateTab'
import { message, Tabs } from 'antd'
import { MovieAPI } from './api'

import 'antd/dist/antd.css'
import './App.css'

const App = () => {
  const [tab, setTab] = useState('1')
  const [genres, setGenres] = useState([])
  const { TabPane } = Tabs

  const switchTab = (activeKey) => setTab(activeKey)

  useEffect(() => {
    MovieAPI.getGenres()
      .then((res) => {
        const {
          data: { genres }
        } = res
        setGenres(genres)
      })
      .catch(() => message.error('Что-то пошло не так'))
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header__tab">
          <Tabs defaultActiveKey="1" onChange={switchTab}>
            <TabPane tab="Search" key="1"></TabPane>
            <TabPane tab="Rated" key="2"></TabPane>
          </Tabs>
        </div>
        {tab === '1' ? <SearchTab genres={genres} /> : <RateTab />}
      </div>
    </div>
  )
}

export default App
