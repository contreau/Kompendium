<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    // Create wave bars
    const bars: Array<HTMLDivElement> = Array.from(
      document.querySelectorAll("div.wave-bar")
    );
    // Animation parameters
    const minHeight = 10;
    const maxHeight = 100;
    const speed = 0.05;
    let time = 0;

    // Animation function using requestAnimationFrame
    function animate() {
      time += speed;

      bars.forEach((bar, index) => {
        // Create a wave pattern using sine waves with different phases
        const height =
          minHeight +
          ((Math.sin(time + index * 0.3) + 1) * (maxHeight - minHeight)) / 2;
        bar.style.height = `${height}px`;
      });

      // Request the next frame
      requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
  });
</script>

<section class="wave-container">
  {#each { length: 50 } as _}
    <div class="wave-bar"></div>
  {/each}
</section>

<style>
  .wave-container {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
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
    filter: drop-shadow(0 0 0.25rem var(--wave-blue));
    border-radius: 2px;
    transition: height 0.1s ease;
  }
</style>
