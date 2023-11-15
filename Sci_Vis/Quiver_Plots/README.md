


# Quiver Plot of OSCAT Wind Vectors

**Author:** Sheikh Muteeb - *IMT2021008*


## Overview

This document outlines the usage and details of a Python notebook that creates a quiver plot depicting wind vectors from the OSCAT (Ocean Surface Current Analysis Real-time) wind dataset. The script utilizes `xarray` for data manipulation, `matplotlib` for plotting, and `imageio` for creating an animated GIF from generated frames.

## Prerequisites

Ensure that the following Python packages are installed:

- `numpy`
- `matplotlib`
- `xarray`
- `cartopy`
- `imageio`

You can install these packages using:

```bash
pip install numpy matplotlib xarray cartopy imageio
```

## Usage

1. **Select OSCAT Wind Data:**

    ```python
    import xarray as xr
    
    dataset = xr.open_dataset('meridional-data/mi.nc')
    dataset2 = xr.open_dataset('zonal-data/zi.nc')
    ```

    Replace `mi.nc` and `zi.nc` with any file in the `meridional-data` and `zonal-data` directories respectively for a particular date you want.

2. **Run the Notebook:**

   Execute the notebook cell by cell to generate the quiver plot and save frames.

3. **Review the Quiver Plot:**

   The script generates a quiver plot of wind vectors on a world map using `cartopy`. The arrows represent wind direction, and color indicates wind speed.

4. **Save the Plot:**

   The generated plot is saved as `file_name.png` in the `./images` directory.

5. **Create GIF:**

   The frames are then compiled into an animated GIF (`Quiver.gif`) using the `imageio` library.

6. **View the GIF:**

   The resulting GIF is saved in the current working directory and can be opened in any GIF-compatible viewer.

## Output

- The quiver plot (`file_name.png`) is saved in the `./images` directory.
- The animated GIF (`Quiver.gif`) is created from individual frames.

## Customization

- Adjust the subsample factor for data subsampling (`subsample_factor` variable).
- Modify the output folder and filename as needed.
- Customize the color map, plot title, and other plot parameters.

## Dependencies

- `numpy`
- `matplotlib`
- `xarray`
- `cartopy`
- `imageio`

