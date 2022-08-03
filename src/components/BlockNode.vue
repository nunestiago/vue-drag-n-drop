<template>
  <div
      ref="oneA"
      class="dot-in-border"
      draggable="true"
      v-on:drag="onDrag($event)"
      v-on:dragover="allowDrop($event)"
      v-on:dragstart="dragStart($event)"
      v-on:drop="drop($event)">
    <svg
        v-if="podeser"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg">
     <circle :transform="`translate(${position.x1}, ${position.y1}) rotate(${position.ae})`" cx="0" cy="0"
            fill="red" r="7" stroke="blue"
             stroke-width="1"/>
      <path
          :d="`M ${position.x1} ${position.y1} C ${position.cx1} ${position.cy1}, ${position.cx2} ${position.cy2}, ${position.x2} ${position.y2}`"
          fill="none"
          stroke="black"
          stroke-width="2"
      />
      <circle :transform="`translate(${position.x2}, ${position.y2}) rotate(${position.ae})`" cx="0" cy="0"
              fill="red" r="7" stroke="blue"
              stroke-width="1"/>

    </svg>
  </div>
</template>

<script>
import {getBoxToBoxArrow} from "coya-arrow";

export default {
  name: "BlockNode",
  data() {
    return {
      podeser: true,
      // startX: 0,
      // startY: 0,
      position: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        cx1: 0,
        cy1: 0,
        cx2: 0,
        cy2: 0
      }
    }
  },
  methods: {
    dragStart(event) {
      console.log(this.$refs.oneA.getBoundingClientRect())
      console.log({dragStart: event});
      this.$store.commit("NodeArrowModule/setStartPosition", {
        startX: event.clientX,
        startY: event.clientY,
      });
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    onDrag(ev) {
      // ev.preventDefault();
      const xs = this.$store.state.NodeArrowModule.startX;
      const ys = this.$store.state.NodeArrowModule.startY;
      this.position = getBoxToBoxArrow(0, 0, 5, 5, (ev.clientX - xs), (ev.clientY - ys), 5, 5, {
        padStart: 0,
        padEnd: 0
      })
    },
    //drag and drop blocks
    drop(ev, item) {
      const xs = this.$store.state.NodeArrowModule.startX;
      const ys = this.$store.state.NodeArrowModule.startY;
      this.position = getBoxToBoxArrow((xs - ev.clientX), (ys - ev.clientY), 5, 5, 0, 0, 5, 5, {
        padStart: 0,
        padEnd: 0
      })

      this.podeser = true;
    },
  },
  props: {toPos: {type: Object}}
}

</script>

<style scoped>
.dot-in-border {
  box-sizing: border-box;
  height: 15px;
  width: 15px;
  border: 2px solid red;
  background-color: #f3f3f3;
  border-radius: 50%;
}

svg {
  overflow: visible;
}
</style>
