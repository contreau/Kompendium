<script>
  let { children } = $props();
</script>

<svelte:head>
  <title>Kompendium • Playlists</title>
</svelte:head>

<header>
  <div>
    <h1>Kompendium</h1>
    <p class="stats">
      <span class="stats-item"><span>826</span> Original Playlists</span>
      <span class="stats-item separator">•</span>
      <span class="stats-item">
        <span>59,903</span>
        Songs
      </span>
      <span class="stats-item separator">•</span>
      <a href="/for-konrad">For Konrad</a>
    </p>
  </div>
</header>

<main>
  {@render children()}
</main>

<style>
  header {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 6rem;
    max-width: fit-content;
    margin-inline: auto;
    padding-bottom: 1.5em;
    position: relative;

    div p {
      font-weight: 600;
      font-size: 1.25rem;
    }

    .stats {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .stats-item span {
      color: var(--accent);
    }
  }

  @media (max-width: 800px) {
    header {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    .separator {
      display: none;
    }
    .stats {
      flex-direction: column;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: clamp(1.8rem, 5.6vw, 5rem);
    font-weight: 550;
  }

  main {
    margin-bottom: 2.5rem;
  }

  /* these media queries responsively change the # of playlists that are displayed in the grid */
  @media (565px <= width <= 800px) {
    :root {
      --cols: 1;
    }
  }

  @media (800px <= width <= 1300px) {
    :root {
      --cols: 2;
    }
  }

  @media (min-width: 1300px) {
    :root {
      --cols: 3;
    }
  }
</style>
