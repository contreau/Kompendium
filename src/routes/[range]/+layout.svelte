<script>
  import SpotifySVG from "$lib/svg/SpotifySVG.svelte";
  let { children } = $props();
  //   TODO: nest into /playlists
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
    background-image: linear-gradient(
      to right top,
      #9890e5,
      #7f74d7,
      #6658c9,
      #4b3dba,
      #2c1faa
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500%;
    background-position: bottom left;
    animation: move-gradient ease alternate-reverse infinite 2.8s;
  }

  @keyframes move-gradient {
    0% {
      background-position: bottom left;
    }
    100% {
      background-position: top right;
    }
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
