import { Chart } from "react-chartjs-2";
import { CryptoTypeBtn, DashboardImageWith, NetExplorer } from "../../../components";
import  CoinCharts  from "../../../components/CoinCharts";
const ReceivePage = () => {
  const receiveData = [
    { title: "MarketCap", value: "238,843,29", currency: "USD", isRaise: 1 },
    { title: "Volume", value: "238,843,29", currency: "USD", isRaise: 2 },
    { title: "Calculating Supply", value: "238,843,29", currency: "USD", isRaise: 1 },
  ];
  return (
    <main className="gap-5 dark:bg-[#1C203B]">
      <DashboardImageWith />
      <div className="flex justify-between p-3.5">
        <h4 className="dark:text-white">Account Summary</h4>
        <div className="flex">
          <h4 className="dark:text-gray-600">Select Date</h4>

        </div>
      </div>
      <ul role="list" className="flex p-3.5 justify-between ">
        {
          Object.values(receiveData).map((item, key) =>
            <CryptoTypeBtn key={key} item={item} />
          )
        }
      </ul>
      <CoinCharts/>
      {/* -------------date section -------------*/}
      <div className="flex justify-between">

      </div>
     
      {/* 
      <div className="w-full font-light px-4 mb-5  items-center space-y-7">
        <div className="flex">
          <div className="flex space-x-3 justify-start items-center">
            <h3 className="text-2xl font-medium">8.62341521</h3>
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
        <Chart info={receiveData} />
      </div> */}

    </main>
  )
}

export default ReceivePage;