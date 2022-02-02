window.onload = function () {
    var myCanvas = document.getElementById('myChart');
    var ctx = myCanvas.getContext('2d');
    var myCanvasEvolucionLine = document.getElementById('myChartEvolucionLine');
    var ctxEvolucionLine = myCanvasEvolucionLine.getContext('2d');
    var myCanvasEvolucionBar = document.getElementById('myChartEvolucionBar');
    var ctxEvolucionBar = myCanvasEvolucionBar.getContext('2d');
    var myCanvasGestionOperador = document.getElementById('myChartGestionOperador');
    var ctxGestionOperador = myCanvasGestionOperador.getContext('2d');
    myChartGestionOperador
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Objetivo',
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                borderColor: "#3e95cd",
                fill: false
            },
            {
                label: 'real',
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                borderColor: "#e8c3b9",
                fill: false
            }]
        },

    });
    new Chart(ctxEvolucionLine, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Objetivo',
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                borderColor: "#3e95cd",
                fill: false
            },
            {
                label: 'real',
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                borderColor: "#e8c3b9",
                fill: false
            }]
        },

    });
    new Chart(ctxEvolucionBar, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Objetivo',
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                borderColor: "#3e95cd",
                fill: false
            },
            {
                label: 'real',
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                borderColor: "#e8c3b9",
                fill: false
            }]
        },

    });
    new Chart(ctxGestionOperador, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Objetivo',
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                borderColor: "#3e95cd",
                fill: false
            },
            {
                label: 'real',
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                borderColor: "#e8c3b9",
                fill: false
            }]
        },

    });

}


