// Load D3.js
// Load bread.json using D3
const breadDataPath = "./bread.json";

function plot_bread(data, x_dim, y_dim, emojiLookup) {
  const svg = d3
    .select("#drawing")
    .append("svg")
    .attr("width", 1600)
    .attr("height", 1200)
    .style("font-family", "'Comfortaa', sans-serif");

  const gContainer = svg.append("g");

  const xMin = d3.min(data, (d) => d[x_dim]);
  const xMax = d3.max(data, (d) => d[x_dim]);

  // choose how much of the width to devote to [0,1]
  const zoomFraction = 0.66; // 20% of the width
  const plotWidth = 1550 - 50; // =1500
  const breakPoint = 1; // value at which we “break”
  const breakX = 50 + plotWidth * zoomFraction;

  const xScale = d3
    .scaleLinear()
    .domain([xMin, breakPoint, xMax])
    .range([50, breakX, 1550]);

  //   const xScale = d3
  //     .scaleLinear()
  //     .domain(d3.extent(data, (d) => d[x_dim]))
  //     .range([50, 1550]);

  const yMin = d3.min(data, (d) => d[y_dim]);
  const yMax = d3.max(data, (d) => d[y_dim]);
  const plotHeight = 1150 - 50; // =1100
  const breakY = 1;
  const breakYPos = 1150 - plotHeight * zoomFraction; // invert because y axis is upside-down

  const yScale = d3
    .scaleLinear()
    .domain([yMin, breakY, yMax])
    .range([1150, breakYPos, 50]);

  //   const yScale = d3
  //     .scaleLinear()
  //     .domain(d3.extent(data, (d) => d[y_dim]))
  //     .range([1150, 50]);

  // Add axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Draw X axis at the bottom of the chart
  gContainer
    .append("g")
    .attr("transform", "translate(0, 1150)") // move to y = bottom margin
    .call(xAxis);

  // Draw Y axis on the left of the chart
  gContainer
    .append("g")
    .attr("transform", "translate(50, 0)") // move to x = left margin
    .call(yAxis);

  // X-axis label
  gContainer
    .append("text")
    .attr("class", "axis-label")
    .attr("x", 50 + (1550 - 50) / 2) // mid-point of [50,1550]
    .attr("y", 1150 + 40) // 40px below the axis line
    .attr("text-anchor", "middle")
    .text(x_dim.replace(/_/g, " "));

  // Y-axis label
  gContainer
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -50 - (1150 - 50) / 2) // mid-point of [50,1150], negated
    .attr("y", 15) // 15px right of the axis line
    .attr("text-anchor", "middle")
    .text(y_dim.replace(/_/g, " "));

  const tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("background", "#fff")
    .style("border", "1px solid #ccc")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.2)")
    .style("pointer-events", "none")
    .style("opacity", 0);

  gContainer
    .selectAll("text.data-point")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "data-point")
    .attr("x", (d) => xScale(d[x_dim]))
    .attr("y", (d) => yScale(d[y_dim]))
    .attr("font-size", "16px")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .text((d) => emojiLookup[d.recipe_name])
    .on("mouseover", function (event, d) {
      const flourIcons = [
        d.has_wheat_flour ? "\u{1F33E}" : "", // 🌾
        d.has_corn_flour ? "\u{1F33D}" : "", // 🌽
        d.has_rice_flour ? "\u{1F35A}" : "", // 🍚
        d.has_other_flour ? "other" : "", //
      ]
        .filter(Boolean) // remove any empty strings
        .join("");

      tooltip
        .style("opacity", 1)
        .html(
          `<div style="font-size: 18px; font-weight: bold;">Recipe: ${
            d.recipe_name
          }</div>
      Fats ratio: ${d["fat_ratio"].toFixed(1)}x<br>
      Sweetener ratio: ${d["sweetener_ratio"].toFixed(1)}x<br>
      Liquid ratio: ${d["liquids_ratio"].toFixed(1)}x<br>
      Salt ratio: ${d["salt_ratio"].toFixed(3)}x<br>
      Has leavening: ${d["has_leavening"] ? "Yes" : "No"}<br>
      Has egg: ${d["has_egg"] ? "\u{1F373}" : "No"}<br>
      Flours: ${flourIcons}<br>
      Total flour: ${d["flour_total"].toFixed(1)}g<br><br>` // Added extra space
        )
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY + 10}px`);
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY + 10}px`);
    })
    .on("mouseout", function () {
      tooltip.style("opacity", 0);
    });

  const zoom = d3
    .zoom()
    .scaleExtent([0.5, 10]) // 50%–1000% zoom
    .on("zoom", (event) => {
      gContainer.attr("transform", event.transform);
    });

  svg.call(zoom).style("cursor", "move");

  d3.select("#reset")
    .on("click", () => {
      svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
    });
}

Promise.all([d3.json(breadDataPath), d3.json("./emoji.json")])
  .then(([breadData, emojiData]) => {
    console.log("Bread data loaded:", breadData);
    console.log("Emoji data loaded:", emojiData);

    const emojiLookup = emojiData.reduce((lookup, item) => {
      lookup[item.recipe] = item.emoji;
      return lookup;
    }, {});

    console.log("Emoji lookup table:", emojiLookup);

    plot_bread(breadData, "sweetener_ratio", "fat_ratio", emojiLookup);
    // You can add additional logic to use emojiData here
  })
  .catch((error) => {
    console.error("Error loading data:", error);
  });
