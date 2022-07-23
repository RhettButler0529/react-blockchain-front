import { useEffect } from 'react';
import { CartesianGrid,ResponsiveContainer, AreaChart, Area,YAxis} from 'recharts';

const  CoinCharts = ()=>{
    const value=[
        { name: 1, value: 25187.44 },
		{ name: 2, value: 27356.99 },
		{ name: 3, value: 34698.98 },
		{ name: 4, value: 37587.55 },
		{ name: 5, value: 27577.4 },
		{ name: 6, value: 25577.4 },
		{ name: 7, value: 18577.4 },
		{ name: 8, value: 28577.4 },
		{ name: 9, value: 41577.4 },
        { name: 10, value: 41577.4 },
        { name: 11, value: 31577.4 },
        { name: 11, value: 21577.4 },
        { name: 11, value: 31577.4 },
        { name: 11, value: 51577.4 },
        { name: 11, value: 31577.4 },
        { name: 11, value: 41577.4 },
        { name: 11, value: 11577.4 },
    ]
   return(
    <div className='flex flex-shrink flex-grow h-64 p-2'>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={value}>
                <defs>
                    <linearGradient
                        id="liquidity-gradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop offset="5%" stopColor="#bc9aff" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#7645D9" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="natural"
                    dataKey="value"
                    stroke="#7645D9"
                    strokeWidth={1.5}
                    fill="url(#liquidity-gradient)"
                    dot={false}
                    />
                
                <YAxis  axisLine={true} tickCount={5}/>
                <CartesianGrid
                    vertical={false}
                    strokeDasharray="4 4"
                    stroke="#aab8c2"
                />
            </AreaChart>
            
        </ResponsiveContainer>
    </div>
   ) 
}
export default CoinCharts;