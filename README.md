# project-7-us-map-d3
## Zoomable US States Map
This project involves creating a zoomable map of the United States using D3.js, TopoJSON, and JavaScript. The map allows users to click on individual states to zoom in and view more details.

## Technologies

- D3.js: A JavaScript library for creating dynamic, interactive data visualizations.
- TopoJSON: An extension of GeoJSON that encodes topology, used for representing geospatial data in a compact format.
- JavaScript: A widely-used programming language for creating interactive web applications.
- HTML: A standard markup language for structuring web pages.
- CSS (Optional): A stylesheet language for styling web pages.

## Steps to Complete the Project

1.  Set up the project folder and environment.
- [X] Create a new project folder.
- [] Initialize a new npm project with npm init -y.
- [] Install dependencies: D3.js and TopoJSON with npm install d3 topojson.
- [] Create and edit the HTML file (index.html).
- [] Add the basic HTML structure, including the DOCTYPE declaration, html, head, and body tags.
- [] Include a script tag to reference the main JavaScript file, main.js.
- [] Create and edit the JavaScript file (main.js).

2. Import the required dependencies: D3.js and TopoJSON.
- [] Define the main chart function, which takes a TopoJSON data object (US states) as input.
- [] Write the D3.js code to create the zoomable map, including the event handlers for zooming and resetting the map.
- [] Load the TopoJSON file (us.json) and call the chart function.
- [] Append the generated SVG element to the DOM.
- [] Obtain and include the TopoJSON data file.

3.  Download the us.json file from a reliable source (e.g., https://gist.github.com/mbostock/4090846#file-us-json).
- [] Save the us.json file in the project folder.
- [] (Optional) Style the map with CSS.

4. Create a CSS file (styles.css) to apply custom styling to the map.
- [] Link the CSS file in the index.html using a link tag in the head section.
- [] Set up and run a local web server.

5. Install the http-server package globally with npm install -g http-server.
- [] Start the local web server by running http-server in the terminal within the project folder.
- [] Open a web browser and navigate to http://localhost:8080 to view the zoomable map.
- [] Test the map functionality.

6. Ensure that clicking on a state zooms in on the state and highlights it in a different color.
7. Test the reset functionality by clicking anywhere on the map outside of the states.

8. (Optional) Deploy the project to a web server or a hosting platform.

- [] Choose a hosting platform (e.g., GitHub Pages, Netlify, or Vercel).
- [] Follow the platform's documentation to deploy your project.

## Notes
Remember to resolve any CORS issues if working with remote data sources by either configuring your local server to serve CORS headers or loading the data from a CORS-enabled source.




