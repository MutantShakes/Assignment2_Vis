d3.csv('../dataset/fuel_consumption_2021.csv', function(err, rows){

    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key];
      });
    }
    
    var data = [{
      type: 'parcoords',
      pad: [80,80,80,80],
      line: {
        // color: unpack(rows, 'Station Id'),
        // colorscale: [[0, 'red'], [0.5, 'green'],[1, 'blue']]
        // color : ['Viridis']
        colorscale: [
            ['0.0', 'rgb(165,0,38)'],
            ['0.111111111111', 'rgb(215,48,39)'],
            ['0.222222222222', 'rgb(244,109,67)'],
            ['0.333333333333', 'rgb(253,174,97)'],
            ['0.444444444444', 'rgb(254,224,144)'],
            ['0.555555555556', 'rgb(224,243,248)'],
            ['0.666666666667', 'rgb(171,217,233)'],
            ['0.777777777778', 'rgb(116,173,209)'],
            ['0.888888888889', 'rgb(69,117,180)'],
            ['1.0', 'rgb(49,54,149)']
          ],
          type: 'heatmap'
      },
    
      dimensions: [{
        range: [2003, 2022],
        label: 'Year',
        values: unpack(rows, 'Year')
      }, 
      {
        // constraintrange: [5, 6],
        range: [48, 500],
        label: 'CNG',
        values: unpack(rows, 'CNG')
      }, 
      {
        label: 'Biodiesel',
        range: [18, 200],
        values: unpack(rows, 'Biodiesel')
      }, 
      {
        label: 'E85',
        range: [10, 90],
        values: unpack(rows, 'E85')
      },
      {
        label: 'LNG',
        range: [0, 60],
        values: unpack(rows, 'LNG')
      },
      {
        label: 'Propane',
        range: [10, 70],
        values: unpack(rows, 'Propane')
      },
      {
        label: 'Electric',
        range: [1, 50],
        values: unpack(rows, 'Electric')
      },
    ]
    }];
    
    var layout = {
      width: 850,
    //   annotations: [
    // 	  {showarrow: false,
    //       text: 'Higher sepal width',
    //       x: 0, y: 1, xref: 'paper', yref: 'paper'},
    // 	  {showarrow: false,
    //       text: 'Lower petal width and length',
    //       x: 0.9, y: .25, xref: 'paper', yref: 'paper'
    //     }]
    };
    
    Plotly.newPlot('myDiv', data, layout);
    
    });
    