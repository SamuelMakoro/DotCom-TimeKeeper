<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Asset Management', 'Contract Managment', 'Reporting App', 'TimeKeeper App', 'Finance App'],
      datasets: [
        {
          backgroundColor: [
            '#17a2b8',
            '#c8ced3',
            '#20c997',
            '#ffc107',
            '#6f42c1'
          ],
          data: [40, 20, 65, 10, 15]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})
  }
}
</script>
