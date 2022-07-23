import { ResponsiveContainer, AreaChart, Area } from 'recharts';

const CryptoTypeBtn = (item, type) => {
	const value=[
		{ name: 1, value: 25187.44 },
		{ name: 2, value: 27356.99 },
		{ name: 3, value: 34698.98 },
		{ name: 4, value: 37587.55 },
		{ name: 5, value: 37577.4 },
		{ name: 6, value: 45577.4 },
		{ name: 7, value: 58577.4 },
		{ name: 8, value: 68577.4 },
		{ name: 9, value: 71577.4 },
	  ];
	return (Object.values(item).map((item2, key2) => (
		<li className="col-span-1 flex flex-col rounded-lg shadow divide-y divide-gray-200 bg-" key={key2}>
				<div className="grid grid-cols-2 gap-3">
					<div className="flex-1 flex flex-col">

						<div className="py-3 dark:bg-gray-300 dark:bg-opacity-20 md:px-1 lg:px-2 xl:p-5">

							<span className="text-gray-600 dark:text-white md:text-sm">{item2.title}</span>

							<div className="flex items-center md:space-x-[1px] lg:space-x-2 xl:space-x-3">

								<h6 className="text-sm lg:text-sm xl:text-base 2xl:text-lg dark:text-white">$ {item2.value}</h6>

								{/* <span className="text-gray-400 text-xs lg:text-sm xl:text-base">{item2.currency}</span> */}

							</div>
							<span className='text-sm'>+ 5.15%</span>
						</div>
						

					</div>
					<div className="flex-1 flex flex-col">
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
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
		</li>
	))
	)
}
export default CryptoTypeBtn;


