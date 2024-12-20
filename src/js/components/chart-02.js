import ApexCharts from "apexcharts";

// ===== chartTwo
const chart02 = () => {
  const chartTwoOptions = {
    series: [
      {
        name: "Number of Cars",
        data: [1663, 1027, 1013, 668, 445, 280, 245
        ],
      },
      
    ],
    colors: ["#3056D3", "#80CAEE"],
    chart: {
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: ["Seattle", "Bellevue", "Kirkland", "Vancouver", "Redmond", "Kent", "Bothell"
],
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",

      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const chartSelector = document.querySelectorAll("#chartTwo");

  if (chartSelector.length) {
    const chartTwo = new ApexCharts(
      document.querySelector("#chartTwo"),
      chartTwoOptions
    );
    chartTwo.render();
  }
};

export default chart02;
