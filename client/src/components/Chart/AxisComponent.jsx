import React from 'react'

const style = {
    stroke:"#000",
    strokeDasharray: 0,
    strokeWidth: 1
}
function AxisComponent ({height, width, xLabel, yLabel}){

    return(
            <>
                <g>
                    <line x1="50" x2="50" y1="5" y2={height}stroke={"red"}></line>
                    <text x="12" y="200" textAnchor="middle" transform="rotate(-90,12,200)">{yLabel} </text>
                </g>
                <g>
                    <line x1="50" x2={width-20} y1={height} y2={height} stroke={"red"}></line>
                    <text x={width/2} textAnchor="middle" y={height+45}>{xLabel}</text>
                </g>
            </>
    )
}

export default AxisComponent
