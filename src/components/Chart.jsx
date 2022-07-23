import React, { Component } from 'react';
import CanvasJSReact from '../plugin/canvasjs-3.6.6/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ info }) => {

    return (
        <>
            <CanvasJSChart options={info}
            /* onRef={ref => this.chart = ref} */
            />
        </>
    );
};

export default Chart;