const newlogHandler = async (event) => {
    event.preventDefault();

    document.location.replace('/log');
  };
  
  document
    .querySelector('#createlog')
    .addEventListener('click', newlogHandler);

    var ctx = document.getElementById('myChart').getContext('2d');

    // Configure the chart
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My Progress',
                data: [12, 19, 3, 5, 2, 3, 7],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    myChart;