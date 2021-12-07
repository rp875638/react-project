import React from 'react';

function BarComponent({data=[], height, width, xScale, yScale, fill}){
    return(
            <g>
                {data.map((value, index)=>(
                    <rect key={index}
                    width={width} 
                    y={height-yScale*value} 
                    x={100+index*xScale} 
                    fill={fill} 
                    height={yScale*value}/>
                ))}
            </g>
    )
}

export default BarComponent
