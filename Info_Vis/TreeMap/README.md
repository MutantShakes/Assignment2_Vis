
# Interactive Treemap Visualization README

**Author:** Sheikh Muteeb - *IMT2021008*


## Objective
The goal of this project is to provide an interactive Treemap chart for visualizing alternate fueling station data across the United States. The visualization is built using HTML, CSS, and JavaScript with the AnyChart library.

## How to Use
1. **Navigate to the Project Directory:**
   ```bash
   cd TreeMap
   ```

2. **Open the HTML File:**
   ```bash
   open final_treemap.html
   ```

3. **Upload a CSV File:**
   Click the "Choose File" button to select a CSV file containing alternate fueling station data. The file "altfuelstations2019.csv" in the current directory is to be selected.

4. **Select Hierarchy Levels:**
   Use the dropdown menus to select the columns for the second hierarchy level in the Treemap chart. The first hierarchy is always set to "State".

5. **Load the Treemap:**
   Click the "Load TreeMap" button to parse the CSV data and display the Treemap chart based on your selections.

6. **Interact with the Treemap:**
   - **Parent-Child Interaction:** Clicking on a parent in the Treemap chart will show the Treemap of its children. Explore the hierarchy by clicking on different regions of the Treemap. To go back in the hierarchy, click the top horizontal gray bar with the name of the parent.

7. **Clear Visualization:**
   To clear the visualization and load a new dataset, click the "Clear" button.

## File Structure
- `final-treemap.html`: The main HTML file containing the structure of the web page.
- `js/anychart-core.min.js`: AnyChart library core file.
- `js/anychart-treemap.min.js`: AnyChart library Treemap module.
- `altfuelstations2019.csv`: File containing the data for the Treemap website.

## Customization
You can customize the appearance and behavior of the Treemap chart by modifying the JavaScript code in the `<script>` section of the `index.html` file. Refer to the AnyChart documentation for additional customization options.

## Dependencies
- AnyChart Library (version 8.10.0): Included in the project for Treemap chart functionality.
```
