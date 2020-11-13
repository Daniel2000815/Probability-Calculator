import React from 'react'
import MaterialTable from 'material-table'

export const Table=({_media, _varianza, _desviacion, _descripcion})=>{
    const data=[
        {media: _media, varianza: _varianza, desviacion: _desviacion, descripcion: _descripcion}
    ]

    const columns=[
        {title: "Descripción", field:'descripcion'},
        {title: "Media", field:'media'},
        {title: "Varianza", field:'varianza'},
        {title: "Desviación Típica", field:'desviacion'}

    ]

    const newLocal = (<div>
        <MaterialTable title="Propiedades"
            data={data}
            columns={columns}
            style={{  margin: '10px', input: { margin: 10 } }}
            options={{
                search: false,
                paging: false
            }} />
    </div>
    )
    return newLocal
}