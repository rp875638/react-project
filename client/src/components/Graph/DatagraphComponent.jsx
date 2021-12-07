import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatagraphData } from '../../redux/actions/GraphAction';
import BarCharComponent from '../Chart/BarChart/BarChartComponent';
const DatagraphComponent =  React.forwardRef(function (props,ref) {
    const graph = useSelector(state => state.graph.data);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getDatagraphData());
    },[]);
    return ( <div ref={ref}>
    
        {graph &&  <BarCharComponent
                        lables={graph.lables} 
                        data={graph.data} 
                        width={graph.width} 
                        offset={graph.offset}
                        axis={graph.axis}/>}   
    </div>
         
    )
})


export default DatagraphComponent;
