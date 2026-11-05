/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Storage may be unavailable in private/restricted browser contexts.
let determineThemeSetting = () => {
  try {
    const setting = localStorage.getItem("theme");
    return (setting === "dark" || setting === "light") ? setting : "system";
  } catch (error) {
    return "system";
  }
};

let determineComputedTheme = () => {
  const setting = determineThemeSetting();
  return setting === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : setting;
};

let setTheme = (theme) => {
  const useTheme = theme || determineComputedTheme();
  if (useTheme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
  $("#theme-toggle").attr("aria-pressed", useTheme === "dark" ? "true" : "false");
};

var toggleTheme = () => {
  const theme = $("html").attr("data-theme") === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", theme); } catch (error) { /* Use the theme for this visit. */ }
  setTheme(theme);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (determineThemeSetting() === "system") {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // FitVids init
  fitvids();

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
