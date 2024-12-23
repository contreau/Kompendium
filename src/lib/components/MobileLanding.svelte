<script>
  import Wave from "./Wave.svelte";
</script>

<header>
  <h1>Kompendium</h1>
  <p class="byline">
    By <a
      href="https://open.spotify.com/user/1261690341?si=d3127b482cc14c4b"
      target="_blank">Konrad Rauscher</a
    >
  </p>
</header>

<Wave />

<nav class="site-links">
  <p><a href="/playlists/1-100">Playlists</a></p>
  <p><a href="/for-konrad">For Konrad</a></p>
</nav>

<style>
  header {
    border-bottom: solid 2px var(--faded-blue);
  }

  h1 {
    font-size: clamp(2.7rem, 10vw, var(--h1-font-size));
    text-align: center;
    font-weight: 650;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    letter-spacing: 2.5px;
  }

  .byline {
    font-size: clamp(1.25rem, 4vw, 1.65rem);
    font-weight: 450;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 0.5rem;

    p {
      text-align: center;
      font-size: clamp(1.5rem, 3.3vw, 2rem);
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    a {
      display: inline-block;
      min-width: 227px;
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
</style>
