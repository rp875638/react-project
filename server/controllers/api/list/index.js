
exports.getList = (req, res, next)=>{
    const data = [{id:63, symbol:'UNH', name:'United Health Inc.', type:'S', curr_price:269.40},
                    {id:12, symbol:'DHR', name:'Danahar Corp', type:'S', curr_price:142.99},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY',name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:12, symbol:'DHR', name:'Danahar Corp', type:'S', curr_price:142.99},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                    {id:11, symbol:'DXY', name:'Occidental Petroleum', type:'S', curr_price:38.95},
                ];
    res.status(200).json(data);
}