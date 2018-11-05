<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['C#', 'JavaScript', 'SQL', 'PHP'],
      datasets: [
        {
          backgroundColor: [
            '#c8ced3',
            '#20c997',
            '#ffc107',
            '#6f42c1'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})
  }
}
</script>
