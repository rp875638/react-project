import React from 'react'
import AxisComponent from '../AxisComponent';
import LabelComponent from '../LabelComponent';
import BarComponent from './BarComponent';
const greatestValue = array=>array.reduce((maxvalue, value)=> (value > maxvalue ? value: maxvalue))
function BarCharComponent({lables = [], data=[], offset=3, width=800, height=450, axis}) {

    const xScale = width/(lables.length+1);
    const yScale =( height/(greatestValue(data)))-0.1;
    const yLabelScale = parseInt(height/offset)
    const yValueScale = parseInt((greatestValue(data))/offset);
    return (
        <svg width={width}  height={height+50}>
            <AxisComponent 
                xLabel={axis.xAxis}  
                yLabel={axis.yAxis} 
                width={width} 
                height={height} />

            <LabelComponent 
                lables={lables} 
                width={width} 
                height={height} 
                xScale={xScale} 
                yLabelScale={yLabelScale} 
                yValueScale={yValueScale} 
                offset={offset} />
           
                <BarComponent 
                    data={data} 
                    height={height} 
                    width="10" 
                    xScale={xScale}
                    yScale={yScale} 
                    fill="teal" />
            
        </svg>
    )
}

export default BarCharComponent
