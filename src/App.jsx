import { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import Rate from './components/Rate/Rate'
import { Tabs } from 'antd'

import 'antd/dist/antd.css'
import './App.css'
import { MovieAPI } from './api'

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
      .catch((err) => console.log(err))
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
        {tab === '1' ? <Search genres={genres} /> : <Rate genres={genres} />}
      </div>
    </div>
  )
}

export default App
