import React from 'react'
import MaterialTable from 'material-table'
export const Table = () => {
    const data=[
        {name:"Pratik",age:22},
        {name:"john",age:26},
        {name:"Balaram",age:27}
    ]
    const columns=[
        {title:"Patient Name",field:"name"},
        {title:"Age",field:"age"}
    ]
    
    return (
        <div>
            <MaterialTable
            title="Patient List"
            data={data}
            columns={columns}
            options={{
                search:true,
                filtering:true,
                exportButton:true
            }}
            />
        </div>
    )
}
