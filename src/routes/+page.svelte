<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import MobileNav from "$lib/components/MobileNav.svelte";
  import SpotifySVG from "$lib/svg/SpotifySVG.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    // Create wave bars
    const bars = Array.from(document.querySelectorAll("div.wave-bar"));
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

<svelte:head>
  <title>Konrad's Songbook</title>
</svelte:head>

<header>
  <div>
    <h1>Konrad's Songbook</h1>
    <p class="stats">
      <span class="stats-item"><span>826</span> Original Playlists</span>
      <span class="stats-item separator">•</span>
      <span class="stats-item">
        <span>59,903</span>
        Songs
      </span>
      <span class="stats-item separator">•</span>
      <a
        href="https://open.spotify.com/user/1261690341?si=235dbc5649f8441e"
        target="_blank"><SpotifySVG /></a
      >
      <span class="separator">•</span>
      <a href="/in-memoriam">In Memoriam</a>
    </p>
  </div>
</header>

<main>
  <div class="wave-container" id="waveContainer">
    {#each { length: 25 } as _}
      <div class="wave-bar"></div>
    {/each}
  </div>
  <MobileNav rangeLabel="" />
  <Nav rangeLabel="" />
</main>

<style>
  .wave-container {
    max-width: 450px;
    height: 150px;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
  }
  .wave-bar {
    --bar-color: #004bfa;
    width: 4px;
    background-color: var(--bar-color);
    filter: drop-shadow(0 0 1rem var(--bar-color));
    border-radius: 2px;
    transition: height 0.1s ease;
  }
</style>
