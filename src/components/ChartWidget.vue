<template>
    <div class="widget">
      <h2>Sales Performance</h2>
      <line-chart
        :data="chartData"
        :colors="['#FF6384', '#36A2EB', '#FFCE56']"
        :library="chartOptions"
        :download="true"
        :legend="true"
        height="300px"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
              // Sales data for 3 products over multiple months
        chartData: [
          {name: "Product A", data: {
            "2023-01": 100, "2023-02": 120, "2023-03": 180, "2023-04": 200,
            "2023-05": 240, "2023-06": 280, "2023-07": 300, "2023-08": 340
          }},
          {name: "Product B", data: {
            "2023-01": 80, "2023-02": 100, "2023-03": 130, "2023-04": 170,
            "2023-05": 200, "2023-06": 250, "2023-07": 280, "2023-08": 310
          }},
          {name: "Product C", data: {
            "2023-01": 60, "2023-02": 80, "2023-03": 110, "2023-04": 140,
            "2023-05": 180, "2023-06": 210, "2023-07": 240, "2023-08": 270
          }}
        ],
        chartOptions: {
          title: {
            display: true,
            text: 'Monthly Sales Comparison'
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Sales (in thousands $)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Month'
              }
            }
          },
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false
            },
            legend: {
              position: 'top',
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
  };
  </script>
  
  <style scoped>
  .widget {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  </style>