d3.csv('../dataset/2021_fuel_stations.csv', function(err, rows){

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
        range: [0, 6],
        label: 'Fuel Type Code',
        values: unpack(rows, 'Fuel Type Code')
      }, 
      {
        // constraintrange: [5, 6],
        range: [0, 5],
        label: 'Owner Type Code',
        values: unpack(rows, 'Owner Type Code')
      }, 
      {
        label: 'Access Code',
        range: [0, 3],
        values: unpack(rows, 'Access Code')
      }, 
      {
        label: 'Facility Type',
        range: [0, 12],
        values: unpack(rows, 'Facility Type')
      },
      {
        label: 'Latitude',
        range: [18, 50],
        values: unpack(rows, 'Latitude')
      },
      {
        label: 'Longitude',
        range: [-130, -60],
        values: unpack(rows, 'Longitude')
      },
    ]
    }];
    
    var layout = {
      width: 850,
      annotations: [
        {showarrow: false,
        text: 'Biodiesel',
        x: -0.1, y: 0.90, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'LPG',
        x: -0.06, y: 0.73, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'E85',
        x: -0.06, y: 0.52, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'Electric',
        x: -0.09, y: 0.36, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'CNG',
        x: -0.06, y: 0.18, xref: 'paper', yref: 'paper'},

        {showarrow: false,
        text: 'State Govn',
        x: 0.2, y: 0.87, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'Local Govn',
        x: 0.2, y: 0.63, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'Global',
        x: 0.2, y: 0.45, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'Private',
        x: 0.2, y: 0.18, xref: 'paper', yref: 'paper'},

        {showarrow: false,
        text: 'Public',
        x: 0.43, y: 0.75, xref: 'paper', yref: 'paper'},
        {showarrow: false,
        text: 'Private',
        x: 0.43, y: 0.24, xref: 'paper', yref: 'paper'},

        ]
    };
    
    Plotly.newPlot('myDiv', data, layout);
    
    });
    