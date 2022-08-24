<template>
  <div class="app-container">
    <div class="ui-flex">
      <div class="flow-chart">
        <svg class="svg-container fs-12" width="600"></svg>
      </div>
      <img :src="imgUrl" width="600" />
    </div>
    <div>
      <el-button @click="createSvg">生成图片</el-button>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';
import domtoimage from 'dom-to-image';

export default {
  data() {
    return {
      imgUrl: ''
    };
  },
  mounted() {
    // Create the input graph
    var g = new dagreD3.graphlib.Graph().setGraph({}).setDefaultEdgeLabel(function() {
      return {};
    });
    // Here we're setting nodeclass, which is used by our custom drawNodes function
    // below.
    g.setNode(0, { label: 'TOP', class: 'type-TOP' });
    g.setNode(1, { label: 'S', class: 'type-S' });
    g.setNode(2, { label: 'NP', class: 'type-NP' });
    g.setNode(3, { label: 'DT', class: 'type-DT' });
    g.setNode(4, { label: 'This', class: 'type-TK' });
    g.setNode(5, { label: 'VP', class: 'type-VP' });
    g.setNode(6, { label: 'VBZ', class: 'type-VBZ' });
    g.setNode(7, { label: 'is', class: 'type-TK' });
    g.setNode(8, { label: 'NP', class: 'type-NP' });
    g.setNode(9, { label: 'DT', class: 'type-DT' });
    g.setNode(10, { label: 'an', class: 'type-TK' });
    g.setNode(11, { label: 'NN', class: 'type-NN' });
    g.setNode(12, { label: 'example', class: 'type-TK' });
    g.setNode(13, { label: '.', class: 'type-.' });
    g.setNode(14, { label: 'sentence', class: 'type-TK' });
    g.nodes().forEach(function(v) {
      var node = g.node(v);
      // Round the corners of the nodes
      node.rx = node.ry = 5;
    });
    // Set up edges, no special attributes.
    g.setEdge(3, 4, { arrowhead: 'vee' });
    g.setEdge(2, 3, { arrowhead: 'normal' });
    g.setEdge(1, 2, { arrowhead: 'undirected' });
    g.setEdge(6, 7);
    g.setEdge(5, 6);
    g.setEdge(9, 10);
    g.setEdge(8, 9);
    g.setEdge(11, 12);
    g.setEdge(8, 11);
    g.setEdge(5, 8);
    g.setEdge(1, 5);
    g.setEdge(13, 14);
    g.setEdge(1, 13);
    g.setEdge(0, 1);
    // Create the renderer
    var render = new dagreD3.render();
    // Set up an SVG group so that we can translate the final graph.
    var svg = d3.select('svg.svg-container');
    var svgGroup = svg.append('g');
    // console.log(d3);
    var zoom = d3.zoom().on('zoom', function(event) {
      svgGroup.attr('transform', event.transform);
    });
    svg.call(zoom);
    // Run the renderer. This is what draws the final graph.
    render(svgGroup, g);
    // Center the graph
    var initialScale = 1;
    svg.call(
      zoom.transform,
      d3.zoomIdentity.translate((svg.attr('width') - g.graph().width * initialScale) / 2, 20).scale(initialScale)
    );

    // d3.selectAll('path.path').attr('marker-end', (v, i, that) => {
    //   console.log(d3.select(that[i]).attr('marker-end'), window.location);
    //   const url = d3
    //     .select(that[i])
    //     .attr('marker-end')
    //     .split(window.location.origin + window.location.pathname)
    //     .join('');
    //   return url;
    // });
    svg.attr('height', g.graph().height * initialScale + 40);
  },
  methods: {
    createSvg() {
      domtoimage.toSvg(document.querySelector('.flow-chart')).then(uri => {
        console.log(uri);
        this.imgUrl = uri;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  overflow-y: auto;
}
/* This sets the color for "TK" nodes to a light blue green. */
::v-deep .svg-container {
  g.type-TK > rect {
    fill: #00ffd0;
  }

  text {
    font-weight: 300;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
  }

  .node rect {
    stroke: #999;
    fill: #fff;
    stroke-width: 1px;
  }

  .edgePath path {
    stroke: #333;
    fill: #333;
    stroke-width: 1px;
  }
}
</style>
