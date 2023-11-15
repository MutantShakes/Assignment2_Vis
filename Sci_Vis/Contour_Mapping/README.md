# Sea Surface Temperature Visualization with NetCDF Datasets - README

## Overview
This Jupyter Notebook explores sea surface temperature data using NetCDF datasets. The notebook includes code for contour mapping and contour filling, creating visualizations for temperature variations over time.

## Requirements
To run the notebook, you'll need to install the following Python libraries. Run the following commands in your Jupyter environment:

```bash
pip install pandas
pip install netCDF4
pip install numpy
pip install xarray
pip install matplotlib
pip install imageio
pip install cartopy

## Usage

1. Open the Jupyter Notebook in your preferred environment.
2. Ensure the required libraries are installed (use the pip install commands above if needed).
3. Run each cell sequentially to execute the code.
4. Visualizations will be displayed within the notebook.

## File Structure

- `dataset/`: Folder containing NetCDF datasets.
- `images/`: Folder to save generated images.
- `marching_squares.py` : This is my own implementation of marching sqaure function. In-built contour function uses similar marching sqaures function.

## Code Structure

- `contour_mapping`: Function for creating contour maps using the marching squares algorithm.
- `contour_fill`: Function for creating filled contour maps.
- `get_latitude` and `get_longitude`: Functions to retrieve latitude and longitude from the NetCDF datasets.
- `get_dataset`: Function to process the dataset using xarray and convert it to a DataFrame.
- `add_contour_mapping` and `add_contour_fill`: Functions to save images of contour maps for later use.
- `save_contour_mapping_images` and `save_contour_fill_images`: Functions to save the images in the `images/` folder.
- `contour_mapping_list` and `contour_fill_list`: Lists to store contour map images.
- `imageio.mimsave`: Save the lists of images as GIFs.

## Output

- The notebook generates contour maps and contour fills for sea surface temperature data.
- Images are saved in the `images/` folder.
- GIFs (`contour_mapping.gif` and `contour_fill.gif`) are created to visualize the changes over time.

