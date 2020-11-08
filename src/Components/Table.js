import React from 'react'
import MaterialTable from 'material-table'

export const Table=({_media, _varianza})=>{
    const data=[
        {media: _media, varianza: _varianza}
    ]

    const columns=[
        {title: "Media", field:'media'},
        {title: "Varianza", field:'varianza'}

    ]

    const newLocal = (<div>
        <MaterialTable title="Propiedades"
            data={data}
            columns={columns}
            options={{
                search: false,
                paging: false
            }} />
    </div>
    )
    return newLocal
}