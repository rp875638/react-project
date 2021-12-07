import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DatagraphComponent from '../Graph/DatagraphComponent';
import ListComponent from '../List/ListComponent';


function PrintComponent({component: Component}) {
    const componentRef = useRef();
    return (
        <div>
            <ReactToPrint 
            trigger={()=>{
                return<a href="#" >Print this page</a>
            }}
            content={()=>componentRef.current}
            />
            <Component ref={componentRef} />
        </div>
    )
}

export default PrintComponent
