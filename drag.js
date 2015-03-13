/**
 * Created by monkee on 13/03/15.
 */
var boxWidth = 800;
var boxHeight = 640;

var box = d3.select('body')
    .append('svg')
    .attr('class', 'box')
    .attr('width', boxWidth)
    .attr('height', boxHeight);

var drag_one = d3.behavior.drag()
    .on('drag', function() { pokemon_one.attr('x', d3.event.x - 50)
        .attr('y', d3.event.y - 40); });

var drag_two = d3.behavior.drag()
    .on('drag', function() { pokemon_two.attr('x', d3.event.x - 45)
        .attr('y', d3.event.y - 50); });

var pokemon_one = box.selectAll('.draggablePokemonOne')
    .data([{ x: 283, y: 133 }])
    .enter()
    .append("svg:image")
    .attr("xlink:href", "small_pokemon.png")
    .attr('class', 'draggablePokemonOne')
    .attr("width", "100")
    .attr("height", "80")
    .attr('x', function(d) { return d.x; })
    .attr('y', function(d) { return d.y; })
    .call(drag_one);

var pokemon_two = box.selectAll('.draggablePokemonTwo')
    .data([{ x: 685, y: 515 }])
    .enter()
    .append("svg:image")
    .attr("xlink:href", "pokemon_two.png")
    .attr('class', 'draggablePokemonTwo')
    .attr("width", "100")
    .attr("height", "80")
    .attr('x', function(d) { return d.x; })
    .attr('y', function(d) { return d.y; })
    .call(drag_two);
