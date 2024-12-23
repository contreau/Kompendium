<script lang="ts">
  import Wave from "$lib/components/Wave.svelte";
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
    <span class="stats-item separator">|</span>
    <span class="stats-item"><span>11</span> Years</span>
    <span class="stats-item separator">|</span>
    <span class="stats-item"><span>826</span> Original Playlists</span>
    <span class="stats-item separator">|</span>
    <span class="stats-item"><span>59,903</span> Songs</span>
  </p>
</header>

<nav class="site-links">
  <p><a href="/playlists/1-100">Playlists</a></p>
  <p><a href="/for-konrad">For Konrad</a></p>
</nav>

<!-- WAVE VISUAL -->
<Wave />

<style>
  header {
    border-bottom: solid 2px var(--faded-blue);
  }

  nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5.5rem;
    margin-bottom: 5.5rem;

    p {
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    a {
      text-decoration: none;
      color: var(--text);
      padding: 0.35em 2em;
      border-left: solid 2.25px var(--text);
      border-right: solid 2.25px var(--text);
      border-radius: 0.5px;
      &:hover {
        color: var(--accent);
        border-left-color: var(--accent);
        border-right-color: var(--accent);
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
</style>
