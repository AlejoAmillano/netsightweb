import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import DataTable from 'react-data-table-component'
import env from 'react-dotenv'
import useAuth from '../../../../hooks/useAuth'

const Dashboard = () => {
  const [data, setData] = useState([])

  const { auth } = useAuth()

  const columns = [
    {
      name: 'Url',
      selector: (row) => row.url,
      cell: (row) => <span style={{ textAlign: 'center' }}>{row.url}</span>,
    },
    {
      name: 'Result',
      cell: (row) => (
        <span
          style={{
            backgroundColor: row.result === 'Safe' ? '#C6F7D0' : '#FFC5C5',
            padding: '5px',
            borderRadius: '5px',
            color: 'black',
            textAlign: 'center', // Add this line
          }}
        >
          {row.result}
        </span>
      ),
    },
    {
      name: 'Blacklist',
      cell: (row) => (
        <span style={{ textAlign: 'center' }}>
          {row.blacklist ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      name: 'Date',
      selector: (row) => row.created_at,
      cell: (row) => (
        <span style={{ textAlign: 'center' }}>{row.created_at}</span>
      ),
    },
  ]

  const rowStyle = {
    style: {
      textAlign: 'center',
    },
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(
          process.env.API_URL + 'scan/user/' + auth._id,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
            },
          }
        )
        const jsonData = await response.json()
        setData(jsonData.scans)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [auth])

  return (
    <div className="dashboard-container">
      <div className="dashboard-dashboard">
        <Sidebar></Sidebar>
        <div className="dashboard-content">
          <div className="dashboard-main-content">
            <div className="dashboard-title">
              <span className="dashboard-text10">
                <span>Scans</span>
              </span>
            </div>
            <DataTable
              rowStyle={rowStyle}
              columns={columns}
              data={data}
              pagination
              fixedHeader
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
