import React from 'react';

function LabelComponent({lables=[], height, width, xScale, yLabelScale, yValueScale, offset}){
    return(
        <>
            <g textAnchor="middle">
                {lables.map((data, index)=>(
                    <text key={index}
                        x={100+index*xScale} 
                        y={height+20}>
                            {data}
                    </text>
                ))}
            </g>
            <g textAnchor="end">
                {Array(offset).fill(1).map((label, index)=>(
                    <text key={index} x="45" y={height-index*yLabelScale}>{index*yValueScale}</text>
                ))}
            </g>
        </>
    )
}

export default LabelComponent
