import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataTable() {

    const [search, setsearch] = useState('')
    // console.log(search);

    const [data, setdata] = useState([])

    const getData = () => {
        return axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            console.log(res.data);
            setdata(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className='row'>
                <div style={{ textAlign: 'center' }} className='ml-10'>

                    <input type='text' placeholder='search' className='dataTable' onChange={(e) => setsearch(e.target.value)} />

                    <table className='table table-border table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.filter((val) => {
                                    return search.toLowerCase() === '' ? val : val.title.toLowerCase().includes(search)
                                }).map((val, ind) => {
                                    return (
                                        <>
                                            <tr key={val.id}>
                                                <td>{val.userId}</td>
                                                <td>{val.title}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default DataTable