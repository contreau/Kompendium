<script lang="ts">
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
  <title>Kompendium • In Memory of Konrad Rauscher</title>
</svelte:head>

<header>
  <h1>Kompendium</h1>
  <p class="stats">
    <span class="stats-item"
      >By <a
        href="https://open.spotify.com/user/1261690341?si=d3127b482cc14c4b"
        target="_blank">Konrad Rauscher</a
      ></span
    >
    <span class="stats-item separator">•</span>
    <span class="stats-item"><span>11</span> Years</span>
    <span class="stats-item separator">•</span>
    <span class="stats-item"><span>826</span> Original Playlists</span>
    <span class="stats-item separator">•</span>
    <span class="stats-item"><span>59,903</span> Songs</span>
  </p>
</header>

<nav class="site-links">
  <p><a href="/playlists/1-100">Playlists</a></p>
  <p><a href="/for-konrad">For Konrad</a></p>
</nav>

<!-- WAVE VISUAL -->
<section class="wave-container" id="waveContainer">
  {#each { length: 50 } as _}
    <div class="wave-bar"></div>
  {/each}
</section>

<style>
  header {
    border-bottom: solid 2px #6290fc3a;
  }

  nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5.5rem;
    margin-bottom: 5.5rem;

    p {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    a {
      text-decoration: none;
      color: var(--text);
      padding: 0.5em;
      border: solid 1.5px transparent;
      border-radius: 10px;
      will-change: filter;
      filter: drop-shadow(0 0 0.45rem var(--text));
      &:hover {
        color: #467eff;
        filter: drop-shadow(0 0 0.45rem #467eff);
      }
    }
  }

  h1 {
    font-size: clamp(2.5rem, 10vw, 6.5rem);
    font-weight: 650;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    letter-spacing: 2.5px;
  }

  p.stats {
    font-size: clamp(1.4rem, 6vw, 1.65rem);
    font-weight: 450;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .stats-item a {
    color: var(--accent);
  }

  .stats-item > span {
    color: var(--accent);
  }

  .separator {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }

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
