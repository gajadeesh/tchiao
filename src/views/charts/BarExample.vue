<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  props:['androidCount','iosCount'],
  extends: Bar,
  // data(){
  //   return{
  //     acount:0,
  //     icount:0
  //   }
  // },
  // beforeMount() {
  //   this.acount = this.$props.androidCount
  //   this.icount = this.$props.iosCount
  // },
  mounted () {
    // Overwriting base render method with actual data.
    // console.log(this.$props.androidCount)
 
      
      this.renderChart(
      {
        labels: ['IOS', 'ANDROID'],
        datasets: [
          {
            label: 'App store Downloads',
            backgroundColor: ['#9ee2d6','#6cc0e2'],
            data: [this.$props.androidCount, this.$props.iosCount, 0]
          }
        ]
      },
      
      {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
            }
          }
        }
      }
    )
  
    // const  acount = await this.$props.androidCount
    // const icount = await this.$props.iosCount
    // await 
  },
  methods:{

  }
}
</script>
