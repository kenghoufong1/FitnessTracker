

const newlogHandler = async (event) => {
    event.preventDefault();

    document.location.replace('/log');
};

document
    .querySelector('#createlog')
    .addEventListener('click', newlogHandler);

const graphdata = async () => {
    const result = await fetch('/api/log/graphdata', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    const chartdata = await result.json();
    console.log(chartdata);
    const chartlabels = chartdata.map(item => item.date)
    const timeworkout = chartdata.map(item => item.workout_duration)
    const timeslept = chartdata.map(item => item.hours_of_sleep)

    function reduceToHours(timeStrArr) {
        // Map over the array and reduce each time string to its hour value
        const hourArr = timeStrArr.map((timeStr) => {
            // Split the time string into its components
            const [hours, minutes, seconds] = timeStr.split(':');
            // Parse the hour value as an integer and return it
            return parseInt(hours, 10);
        });
        // Return the array of hour values
        return hourArr;
    }
    const hourArr = reduceToHours(timeworkout);


    var ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
      
        // Specify the data for the chart
        data: {
          labels: chartlabels,
          datasets: [
            {
              label: 'Hours of Sleep',
              data: hourArr,
              yAxisID: 'y-axis-1', // Specify the ID of the first y-axis
              borderColor: 'red', // Specify the line color
              borderWidth: 2, // Specify the line width
            },
            {
              label: 'Hours Worked out',
              data: timeslept,
              yAxisID: 'y-axis-1', // Specify the ID of the second y-axis
              borderColor: 'blue', // Specify the line color
              borderWidth: 2, // Specify the line width
            },
          ],
        },
        options: {
            scales: {
              yAxes: [
                {
                  id: 'y-axis-1', // Specify the ID of the first y-axis
                  type: 'linear',
                  position: 'left',
                  scaleLabel: {
                    display: true,
                    labelString: 'Values',
                  },
                  ticks: {
                    beginAtZero: true, // Start the axis at zero
                  },
                },
              ],
            },
          },
        });

    myChart;

};
graphdata();


