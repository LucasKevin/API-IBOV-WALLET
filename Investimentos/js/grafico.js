document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('grafico-bolsa', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Ibovespa (IBOV)'
        },
        subtitle: {
            text: 'Atualizado em tempo real'
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'Pontos (Milhares)'
            }
        },
        series: [{
            name: 'Ibovespa',
            data: [] 
        }],
        tooltip: {
            valueSuffix: 'k'
        }
    });

    function updateChart() {
        const now = new Date();
        const categories = [];
        const newData = [];

        // Gerando dados para os últimos 7 dias
        for (let i = 6; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(now.getDate() - i);
            categories.push(date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
            newData.push(Math.floor(Math.random() * 5) + 128); 
        }

        chart.xAxis[0].setCategories(categories);
        chart.series[0].setData(newData);
    }

    setInterval(updateChart, 10000);

    updateChart();
});
