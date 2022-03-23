import React, { useState } from 'react'
import './datatable.scss'
import { userColums, userRows } from '../../datatablesource';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'

const Datatable = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                    <Link to='/users/test' >
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
      <div className='datatable' >
          <div className="dataTitle">
              Add New User
              <Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
                  Add New
              </Link>
          </div>
          <DataGrid
              className='datagrid'
            rows={data}
            columns={userColums.concat(actionColumn)}
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable