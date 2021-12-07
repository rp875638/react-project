import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListData } from '../../redux/actions/ListAction'

const ListComponent = React.forwardRef( (props, ref)=> {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getListData());
    },[]);

    return (
        <table ref={ref} className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Current Price</th>
                </tr>
            </thead>
            <tbody>
                {list.data ? list.data.map((value,index)=>{
                    return <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.symbol}</td>
                        <td>{value.name}</td>
                        <td>{value.type}</td>
                        <td>{value.curr_price}</td>
                    </tr>
                }):<tr></tr>}
            </tbody>
        </table>
    )
})


export default ListComponent;