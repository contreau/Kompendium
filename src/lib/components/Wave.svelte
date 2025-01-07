<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  const props = $props();

  function size_wave() {
    // smallest number of wave bars: 20 at 320px viewport
    // grows to 50 bars by 1440px viewport
    // grow 1 bar roughly every 37 pixels
    const current_viewport_width = window.screen.availWidth;
    const increment = 37;
    const diff = current_viewport_width - 320;
    const growth_amount = Math.floor(diff / increment);
    for (let i = 0; i < growth_amount; i++) {
      wave_count.push(0);
    }
  }

  let wave_count: Array<number> = $state([]);
  if (browser) {
    // Create wave bars based on viewport
    wave_count = Array.from({ length: 20 }, (_, i) => i);
    size_wave();
  }

  onMount(() => {
    // Grab wave bars
    const bars: Array<HTMLDivElement> = Array.from(
      document.querySelectorAll("div.wave-bar")
    );
    // Animation parameters
    const minHeight = 10;
    const maxHeight = 100;
    const speed = 0.05;
    let time = 0;
    const colors = [
      "#f72585",
      "#b5179e",
      "#7209b7",
      "#560bad",
      "#480ca8",
      "#3a0ca3",
      "#3f37c9",
      "#4361ee",
      "#4895ef",
      "#4cc9f0",
    ];

    // Animation function using requestAnimationFrame
    function animate() {
      time += speed;

      bars.forEach((bar, index) => {
        // Create a wave pattern using sine waves with different phases
        const height =
          minHeight +
          ((Math.sin(time + index * 0.3) + 1) * (maxHeight - minHeight)) / 2;
        bar.style.height = `${height}px`;
        if (index > 9) {
          bar.style.backgroundColor = colors[index % 10];
          bar.style.filter = `drop-shadow(0 0 0.25rem ${colors[index % 10]})`;
        } else {
          bar.style.backgroundColor = colors[index];
          bar.style.filter = `drop-shadow(0 0 0.25rem ${colors[index]})`;
        }
      });

      // Request the next frame
      requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
  });
</script>

<section
  class="wave-container"
  style="margin-top: {props.margin}rem; margin-bottom: {props.margin}rem"
>
  {#each wave_count}
    <div class="wave-bar"></div>
  {/each}
</section>

<style>
  .wave-container {
    /* rainbow color variables */
    --c0: #f72585;
    --c1: #b5179e;
    --c2: #7209b7;
    --c3: #560bad;
    --c4: #480ca8;
    --c5: #3a0ca3;
    --c6: #3f37c9;
    --c7: #4361ee;
    --c8: #4895ef;
    --c9: #4cc9f0;
    max-width: 100%;
    min-height: 150px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .wave-bar {
    width: 3px;
    background-color: var(--wave-blue);
    will-change: filter;
    filter: drop-shadow(0 0 0.25rem var(--wave-blue));
    border-radius: 2px;
    transition: height 0.1s ease;
  }
</style>
