d3.csv('../dataset/cng.csv', function(err, rows){

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
    range: [2200, 4000],
    label: 'CNG Pressure in Pounds',
    values: unpack(rows, 'CNG PSI')
  }, 
  {
    // constraintrange: [5, 6],
    range: [0, 6],
    label: 'CNG Dispenser Number',
    values: unpack(rows, 'CNG Dispenser Num')
  }, 
  {
    label: 'CNG Vehicle Class',
    range: [0, 4],
    values: unpack(rows, 'CNG Vehicle Class')
  }, 
  {
    label: 'Log (CNG Compression Capacity)',
    range: [3, 14],
    values: unpack(rows, 'Log CNG Total Compression Capacity')
  },
  {
    label: 'Log (CNG Storage Capacity)',
    range: [0, 20],
    values: unpack(rows, 'Log CNG Storage Capacity')
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
