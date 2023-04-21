

import {Runtime, Library} from "@observablehq/runtime";
import define from "./chart.js";
import * as d3 from "d3";
import * as topojson from "topojson-client";



const runtime = new Runtime();
const main = runtime.module(define, name => {
  if (name === "chart") {
    return new Library.DOMNode(document.body);
  }
});




export default function define(runtime, observer) {
  const main = runtime.module();
  
  main.variable(observer("chart")).define("chart", ["d3", "topojson", "us"], (d3, topojson, us) => {
    // Your entire chart function here, but change the last line to:
    return svg;
  });

  main.variable(observer("us")).define("us", ["d3"], d3 => d3.json("https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/us.json"));

  return main;
}
