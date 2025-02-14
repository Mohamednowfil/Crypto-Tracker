import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import './LineChart.css';

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        if (historicalData && historicalData.prices) {
            const dataCopy = [["Date", "Prices"]];
            historicalData.prices.forEach((item) => {
                const date = new Date(item[0]).toLocaleDateString(); // Format the date
                dataCopy.push([date, item[1]]);
            });
            setData(dataCopy);
        }
    }, [historicalData]);

    return (
        <div className="chart-container">
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={{
                    title: 'Historical Prices',
                    titleTextStyle: {
                        color: '#ffffff',
                        fontSize: 20,
                        bold: true,
                    },
                    titlePosition: 'center',
                    hAxis: {
                        title: 'Date',
                        titleTextStyle: {
                            color: '#ffffff',
                        },
                        textStyle: {
                            color: '#cccccc',
                        },
                        gridlines: { color: 'transparent' },
                    },
                    vAxis: {
                        title: 'Price',
                        titleTextStyle: {
                            color: '#ffffff',
                        },
                        textStyle: {
                            color: '#cccccc',
                        },
                        gridlines: { color: 'transparent' },
                    },
                    legend: 'none',
                    backgroundColor: 'transparent',
                    colors: ['#ffcc00'],
                    lineWidth: 3,
                    curveType: 'function', 
                    pointSize: 0,
                    pointsVisible: false,
                    tooltip: {
                        isHtml: true
                    }
                }}
                legendToggle
            />
        </div>
    );
};

export default LineChart;
