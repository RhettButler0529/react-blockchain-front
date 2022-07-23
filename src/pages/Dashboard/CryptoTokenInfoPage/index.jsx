import React, { useContext, useState } from "react";

import { Button, NetExplorer, DashboardImageWith, CryptoTypeBtn } from "../../../components";
import Chart from "../../../components/Chart";
import { ThemeContext } from "../../../utils/theme/ThemeContext";

const CryptoTokenInfoPage = () => {
	const { isToggle, toggleTheme } = useContext(ThemeContext);
	const options = {
		animationEnabled: true,
		theme: "light2",
		backgroundColor: isToggle ? ("#1C203B") : ("white"),
		legend: {
			cursor: "pointer"
		},
		title: {
		},
		axisY: {
			prefix: "$ "
		},
		data: [{
			type: "splineArea",
			dataPoints: [
				{ x: new Date(2008, 0), y: 70.735 },
				{ x: new Date(2009, 0), y: 74.102 },
				{ x: new Date(2010, 0), y: 72.569 },
				{ x: new Date(2011, 0), y: 72.743 },
				{ x: new Date(2012, 0), y: 72.381 },
				{ x: new Date(2013, 0), y: 71.406 },
				{ x: new Date(2014, 0), y: 73.163 },
				{ x: new Date(2015, 0), y: 74.270 },
				{ x: new Date(2016, 0), y: 72.525 },
				{ x: new Date(2017, 0), y: 50.121 },
				{ x: new Date(2017, 1), y: 49.121 },
				{ x: new Date(2017, 2), y: 45.121 },
				{ x: new Date(2017, 3), y: 55.121 },
				{ x: new Date(2017, 4), y: 51.121 },
				{ x: new Date(2017, 5), y: 42.121 },
				{ x: new Date(2017, 6), y: 39.121 },
				{ x: new Date(2017, 7), y: 35.121 },
				{ x: new Date(2017, 8), y: 39.121 },
				{ x: new Date(2017, 9), y: 45.121 },
				{ x: new Date(2017, 10), y: 49.121 },
				{ x: new Date(2017, 11), y: 54.121 },
				{ x: new Date(2017, 12), y: 53.121 },
				{ x: new Date(2018, 1), y: 58.121 },
				{ x: new Date(2018, 2), y: 59.121 },
				{ x: new Date(2018, 3), y: 65.121 },
				{ x: new Date(2018, 4), y: 61.121 },
				{ x: new Date(2018, 5), y: 54.121 },
				{ x: new Date(2018, 6), y: 58.121 },
				{ x: new Date(2018, 7), y: 55.121 },
				{ x: new Date(2018, 8), y: 60.121 },
				{ x: new Date(2018, 9), y: 65.121 },
				{ x: new Date(2018, 10), y: 66.121 },
				{ x: new Date(2018, 11), y: 73.1 },
				{ x: new Date(2018, 12), y: 79.121 },
			]
		}]
	}

	const rangeChanged = {
		zoomEnabled: true,
		rangeChanged: function (e) {
			var eventCountElement = document.getElementById("eventCount");
			eventCountElement.setAttribute("value", parseInt(eventCountElement.getAttribute("value")) + 1);

			var triggerLogElement = document.getElementById("triggerLog");
			triggerLogElement.setAttribute("value", e.trigger);

		},
		animationEnabled: true,
		theme: "light2",
		backgroundColor: isToggle ? ("#1C203B") : ("white"),
		legend: {
			cursor: "pointer"
		},
		title: {
			enabled: false
		},
		height: 200,
		axisY: {
			titleFontSize: 1,
			crosshair: {
				enabled: true
			}
		},
		data: [{
			type: "splineArea",
			dataPoints: [
				{ x: new Date(2008, 0), y: 70.735 },
				{ x: new Date(2009, 0), y: 74.102 },
				{ x: new Date(2010, 0), y: 72.569 },
				{ x: new Date(2011, 0), y: 72.743 },
				{ x: new Date(2012, 0), y: 72.381 },
				{ x: new Date(2013, 0), y: 71.406 },
				{ x: new Date(2014, 0), y: 73.163 },
				{ x: new Date(2015, 0), y: 74.270 },
				{ x: new Date(2016, 0), y: 72.525 },
				{ x: new Date(2017, 0), y: 50.121 },
				{ x: new Date(2017, 1), y: 49.121 },
				{ x: new Date(2017, 2), y: 45.121 },
				{ x: new Date(2017, 3), y: 55.121 },
				{ x: new Date(2017, 4), y: 51.121 },
				{ x: new Date(2017, 5), y: 42.121 },
				{ x: new Date(2017, 6), y: 39.121 },
				{ x: new Date(2017, 7), y: 35.121 },
				{ x: new Date(2017, 8), y: 39.121 },
				{ x: new Date(2017, 9), y: 45.121 },
				{ x: new Date(2017, 10), y: 49.121 },
				{ x: new Date(2017, 11), y: 54.121 },
				{ x: new Date(2017, 12), y: 53.121 },
				{ x: new Date(2018, 1), y: 58.121 },
				{ x: new Date(2018, 2), y: 59.121 },
				{ x: new Date(2018, 3), y: 65.121 },
				{ x: new Date(2018, 4), y: 61.121 },
				{ x: new Date(2018, 5), y: 54.121 },
				{ x: new Date(2018, 6), y: 58.121 },
				{ x: new Date(2018, 7), y: 55.121 },
				{ x: new Date(2018, 8), y: 60.121 },
				{ x: new Date(2018, 9), y: 65.121 },
				{ x: new Date(2018, 10), y: 66.121 },
				{ x: new Date(2018, 11), y: 73.1 },
				{ x: new Date(2018, 12), y: 79.121 },
			]
		}]
	}

	const data = [
		{ title: "MarketCap", value: "238,843,29", currency: "USD" },
		{ title: "Volume", value: "238,843,29", currency: "USD" },
		{ title: "Calculating Supply", value: "238,843,29", currency: "USD" },
		{ title: "Max Supply", value: "238,843,29", currency: "USD" },
	];

	return (
		<main className="flex relative dark:text-white">
			<div className="py-6 md:py-8 space-y-10 pb-10 dark:bg-[#1C203B] sm:px-6 md:px-8">
				<DashboardImageWith />
				<NetExplorer />
				<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{
						Object.values(data).map((item, key) =>
							<CryptoTypeBtn key={key} item={item} />
						)
					}
				</ul>

				<div>
					<p className="
							text-xs font-extralight leading-5 
							md:text-sm md:font-light md:leading-6 
							lg:text-base lg:leading-7
							xl:text-lg
							">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et qu
						explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunti
						ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,c
						ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita ae co
						ugiat quo voluptas nulla pariatur i nesciunt. Neque porro quisquam est, qui </p>
				</div>
				<div>
					<div className="flex gap-4">
						<Button props={
							{
								classN: "bg-primary flex rounded-lg gap-2 px-2 text-white items-center",
								value: "Deposit USDC"
							}}
						/>
						<Button props={
							{
								classN: "bg-secondary flex py-3 px-5 rounded-xl text-white gap-2 items-center",
								value: "Withdraw USDC"
							}}
						/>
						<Button props={
							{
								classN: "bg-transparent border-2 border-gray-300 flex py-3 px-5 rounded-xl text-black gap-5 dark:text-white",
								value: "History"
							}}
						/>
					</div>
				</div>

				<div className="w-full font-light px-4 mb-5  items-center space-y-7">
					<div className="flex">
						<div className="flex space-x-3 justify-start items-center">
							<h3 className="text-2xl font-medium">Account</h3>
							<span className="text-gray-400">XLM</span>
						</div>
						<div className="flex space-x-3 ml-auto items-center">
							<div className="flex space-x-2 items-center">
								<span className="text-gray-400">from</span>
								<h3 className="text-lg font-normal">August 2018</h3>
							</div>
							<div className="flex space-x-2 items-center">
								<span className="text-gray-400">to</span>
								<h3 className="text-lg font-normal">May 2019</h3>
							</div>
						</div>
					</div>
					<Chart info={options} />
				</div>

				<div className="mx-auto font-light px-4 mb-5 ">
					<Chart info={rangeChanged} />
				</div>

				<div className="flex flex-wrap justify-between gap-7">
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white">Asset Holders</p>
						<p className="h-1/2 flex items-center">1552839</p>
					</div>
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white">Deposit | Withdraw</p>
						<p className="h-1/2 flex items-center">Availble</p>
					</div>
					<div className="flex-row col-span-2">
						<p className="h-1/2 text-gray-700 font-light dark:text-white">Asset Issuer</p>
						<div className="flex h-1/2 gap-1 items-center">
							<p>
								GDNAJRWQ...ADGFHSDHAS
							</p>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 " width="56" height="56" viewBox="0 0 56 56">
								<g id="Group_46225" data-name="Group 46225" transform="translate(0.277 0.23)">
									<circle id="Ellipse_1593" data-name="Ellipse 1593" cx="28" cy="28" r="28" transform="translate(-0.277 -0.23)" fill="#6b5377" />
									<g id="copy-svgrepo-com" transform="translate(17.104 16.723)">
										<g id="Group_46224" data-name="Group 46224" transform="translate(0)">
											<g id="Group_46223" data-name="Group 46223" transform="translate(0)">
												<path id="Path_37872" data-name="Path 37872" d="M152.551,0H140.372A1.576,1.576,0,0,0,138.8,1.574V5.268h1.437V1.574a.137.137,0,0,1,.137-.137h12.179a.137.137,0,0,1,.137.137V13.753a.137.137,0,0,1-.137.137h-3.579v1.437h3.579a1.576,1.576,0,0,0,1.574-1.574V1.574A1.576,1.576,0,0,0,152.551,0Z" transform="translate(-132.208)" fill="#fff" />
												<path id="Path_37873" data-name="Path 37873" d="M14.956,140H2.777A1.576,1.576,0,0,0,1.2,141.572v12.179a1.576,1.576,0,0,0,1.574,1.574H14.956a1.576,1.576,0,0,0,1.574-1.574V141.572A1.576,1.576,0,0,0,14.956,140Zm0,13.89H2.777a.137.137,0,0,1-.137-.137V141.572a.137.137,0,0,1,.137-.137H14.956a.137.137,0,0,1,.137.137v12.179h0A.137.137,0,0,1,14.956,153.888Z" transform="translate(-1.203 -133.293)" fill="#fff" />
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
					</div>
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white">Type</p>
						<p className="h-1/2 flex items-center">Flat Margin</p>
					</div>
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white">Anchored Asset</p>
						<p className="h-1/2 flex items-center">USD</p>
					</div>
				</div>

				<div className="mx-auto">
					<div className="space-y-2">
						<p className="h-1/2 text-gray-700 font-light dark:text-white">Conditions</p>
						<p className="h-1/2">Not set by the issuer</p>
					</div>
				</div>

				<div>
					<div className="space-y-2">
						<p className="h-1/2 text-gray-700 font-light dark:text-white">Authorization Flag</p>
						<p className="
							text-xs font-extralight leading-5 
							md:text-sm md:font-light md:leading-6 
							lg:text-base lg:leading-7
							xl:text-lg
							">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperi
							explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gi
							ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qr
							ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ap
							ugiat quo voluptas nulla pariatur i nesciunt. Neque porro quisquam est, qui </p>
					</div>
				</div>
			</div>
		</main>
	)
}

export default CryptoTokenInfoPage;