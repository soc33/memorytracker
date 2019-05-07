import React, { Component } from 'react';

class Table extends Component {

  render() {
    return (
      <div>
        <h3 class="header">Zootastic Frontend</h3>
        <div id="buttons">
          <button class="btn" id="weight-sort">Sort By Weight</button>
          <button class="btn" id="name-sort">Sort By Name</button>
        </div>
        <table id="results">
          <thead>
            <tr>
              <th id="animal-name">Name</th>
              <th id="animal-legs">Num Legs</th>
              <th id="animal-class">Class</th>
              <th id="animal-weight">Weight</th>
              <th id="animal-new-name">But I'd Call It...</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        <script src="app.js"></script>

      </div>
    );
  }
}

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(entries) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  entries.forEach(function (entry) {
    // Append each of the animal's properties to the table
    var tr = $("<tr>").append(
      $("<td>").text(entry.title),
      $("<td>").text(entry.rating),
      $("<td>").text(entry.favorite),
      $("<td>").text(entry.comment),
    );

    $("tbody").append(tr);
  });
}

// Bonus function to change "active" header
function setActive(selector) {
  // remove and apply 'active' class to distinguish which column we sorted by
  $("th").removeClass("active");
  $(selector).addClass("active");
}

// 1: On Load
// ==========

// First thing: ask the back end for json with all animals
$.getJSON("/all", function (data) {
  // Call our function to generate a table body
  displayResults(data);
});

// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#weight-sort").on("click", function () {
  // Set new column as currently-sorted (active)
  setActive("#animal-weight");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/weight", function (data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#name-sort").on("click", function () {
  // Set new column as currently-sorted (active)
  setActive("#animal-name");

  // Do an api call to the back end for json with all animals sorted by name
  $.getJSON("/name", function (data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});


export default Table;
