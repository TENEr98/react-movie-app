import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import './Loader.css'

const Loader = () => {
  return (
    <div className="wrapper__loader">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
  )
}

export default Loader
