<script>
import { Line } from 'vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { random } from '@/shared/utils'

export default {
  extends: Line,
  props: ['height','newUserTraffic'],
  data(){
    return{
      data1:[],
      id:[]
    }
  },
  watch:{
    newUserTraffic:function(val){
      // console.log(val)
      // this.TLength = val.length
    // const data = []
    // const id = []
    // // this.fetchChart(data,id)
    // val.forEach(element => {
    //   // console.log(element.count)
    //   data.push(element.count)
    //   id.push(element._id)
    // });
      

    // var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
    const data = Object.keys(val).map(function(key) {
      return val[key].count;
    });

    const id = Object.keys(val).map(function(key) {
      return val[key]._id;
    });

    this.fetchChart(data,id)
// console.log(result);
      
    }
  },
  methods:{
    fetchChart:function(data,id){
      
      
    // console.log(id)
    
    const brandSuccess = getStyle('--success') || '#4dbd74'
    const brandInfo = getStyle('--info') || '#20a8d8'
    const brandDanger = getStyle('--danger') || '#f86c6b'
    this.renderChart(
      
      {
      labels: id,
      datasets: [
        {
          label: 'New User Traffic',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data
        },
        // {
        //   label: 'New users',
        //   backgroundColor: 'transparent',
        //   borderColor: brandSuccess,
        //   pointHoverBackgroundColor: '#fff',
        //   borderWidth: 2,
        //   data: data2
        // },
        // {
        //   label: 'My Third dataset',
        //   backgroundColor: 'transparent',
        //   borderColor: brandDanger,
        //   pointHoverBackgroundColor: '#fff',
        //   borderWidth: 1,
        //   borderDash: [8, 5],
        //   data: data3
        // }
      ]
    }, {
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
          }
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(50 / 5),
            max: 50
          },
          gridLines: {
            display: true
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    })
    //   for (let i = 0; i <= val.length; i++) {
    //   //  console.log(val[i].count)
    //   // if(val[i].count == String){
    //   data1.push(val[i].count)
    //   // }
    //   // data2.push(random(80, 100))
    //   id.push(val[i]._id)
    //   // data3.push(65)
    // }
    }
    
  }
}
</script>
