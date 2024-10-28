const API_TOKEN = ''; // TOKEN DA API

// Configuração do gráfico
let chart;

function initGrafico() {
    chart = Highcharts.chart('grafico-bolsa', {
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
}

function atualizarGrafico(precoAtual) {
    const now = new Date();
    const categoria = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    chart.series[0].addPoint(precoAtual, true, chart.series[0].data.length >= 7);
    chart.xAxis[0].categories.push(categoria);
    
    if (chart.xAxis[0].categories.length > 7) {
        chart.xAxis[0].categories.shift();
    }
}

async function obterCotacaoBolsa() {
    const cotacaoBolsa = document.getElementById('cotacao-bolsa');
    
    try {
        const response = await fetch(`https://brapi.dev/api/quote/^BVSP?token=${API_TOKEN}`);
        
        if (!response.ok) {
            throw new Error('Erro ao obter dados da API');
        }

        const data = await response.json();
        console.log('Dados da API:', data); // Verificação de dados recebidos

        if (data && data.results && data.results.length > 0) {
            const acao = data.results[0];
            const preco = acao.regularMarketPrice;
            
            if (preco !== undefined) {
                cotacaoBolsa.innerText = `R$ ${preco.toFixed(2)}`;
                atualizarGrafico(preco);
            } else {
                cotacaoBolsa.innerText = 'Preço não disponível.';
            }
        } else {
            cotacaoBolsa.innerText = 'Ação não encontrada.';
        }
    } catch (error) {
        console.error('Erro:', error);
        cotacaoBolsa.innerText = 'Erro ao carregar cotação';
    }
}

function calcularSalario() {
    const salario = parseFloat(document.getElementById('salario').value);
    
    if (isNaN(salario) || salario <= 0) {
        alert('Por favor, insira um valor de salário válido.');
        return;
    }

    const totalPagar = salario * 0.5;
    const totalGastar = salario * 0.3;
    const totalInvestir = salario * 0.2;

    document.getElementById('pagar').innerText = totalPagar.toFixed(2);
    document.getElementById('gastar').innerText = totalGastar.toFixed(2);
    document.getElementById('investir').innerText = totalInvestir.toFixed(2);
}

function init() {
    const botaoCalcular = document.getElementById('calcular');
    botaoCalcular.addEventListener('click', calcularSalario);
    
    initGrafico();
    obterCotacaoBolsa();
    
    setInterval(obterCotacaoBolsa, 60000);
}

window.onload = init;
