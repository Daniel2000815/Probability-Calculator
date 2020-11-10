import React from 'react'
import MaterialTable from 'material-table'

export const Table=({_media, _varianza, _desviacion})=>{
    const data=[
        {media: _media, varianza: _varianza, desviacion: _desviacion}
    ]

    const columns=[
        {title: "Media", field:'media'},
        {title: "Varianza", field:'varianza'},
        {title: "Desviación Típica", field:'desviacion'}

    ]

    const newLocal = (<div>
        <MaterialTable title="Propiedades"
            data={data}
            columns={columns}
            style={{ width: '800px', margin: '10px', input: { margin: 10 } }}
            options={{
                search: false,
                paging: false
            }} />
    </div>
    )
    return newLocal
}