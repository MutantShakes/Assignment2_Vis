# Readme - Colour Mapping

- Color mapping in data visualization refers to the technique of associating colors with data values to represent information graphically. It is a crucial aspect of creating effective and meaningful visualizations. The primary goals of color mapping are to enhance data interpretation, highlight patterns, and make information more accessible to viewers.

## Table of Contents

- [My Work](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## My Work

- Here, first I get a .nc file and read it with NetCDF4 library.
- Then, I check for global maxima and minima.
- I got the maxiam as 33.585 and minima as -999, which I changed to 0 for easier representation.
- Then, I did a little bit of pre-processing and made 3 plotting functions as specified in the guidelines.
- In the end, I found the regular one more relevant than others, so I used it and extended it for automation purposes.
- I experimented with various types of color maps, like viridis, jet, magma, etc.
- In the end, I ended up chosing Jet as my main color map, which is the only one that went into the report.

## Installation

1. We need these 2 libraries, that can be downloaded by writing pip install
```bash
- pip install netCDF4
- pip install mpl_toolkits.basemap
```
2. We simple have to keep running everything in top to down order to run this properly

## Usage
- This code is to be used for generating SST color map for DV Assignment-2 (SciViz). It gets it's data from nc_files folder and saves the plots in images folder.
