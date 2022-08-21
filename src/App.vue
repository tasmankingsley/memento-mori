<script setup>
import { reactive, ref } from "vue";

let age = ref(0);
let life_expectancy = ref(72);
let visible = reactive({overlay: true});

function toggle() {
  visible.overlay = false;
};

</script>

<template>
  <div class="overlay" v-show="visible.overlay">
    <span>What is your age?</span>
    <input type="number" min="0" v-model="age" />

    <span>What is your life expectancy?</span>
    <input type="number" min="0" v-model="life_expectancy" />

    <button @click="toggle">save</button>
    <!-- <input type="date" /> -->
  </div>

  <div>
    <span>Days left to live:</span>
    <span>{{(life_expectancy - age) * 365}} days</span>
    <span>{{(life_expectancy - age)}} years</span>
    <span>{{(life_expectancy - age) * 365 * 24}} hours</span>
    <span>Remember that you must die.</span>
  </div>


</template>

<style scoped>
  div {
    display: grid;
    grid-auto-rows: 100px;
    place-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .overlay {
    display: grid;
    grid-auto-rows: 100px;
    position: fixed;
    z-index: 2;
    gap: 10px;
    height: 100%;
    width: 100%;
    background-color: #000;
  }

  input {
    font-size: 1.5rem;
    padding: 5px;
    width: 200px;
    background-color: #dad9d4;
  }

  span {
    font-size: 2rem;
  }
</style>
