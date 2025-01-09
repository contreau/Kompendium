<script>
  import Wave from "./Wave.svelte";
</script>

<header>
  <h1>Kompendium</h1>
</header>

<Wave margin="0" />

<nav class="site-links">
  <p><a href="/playlists/1-100">Playlists</a></p>

  <p><a href="/in-memoriam">In Memoriam</a></p>
</nav>

<style>
  h1 {
    font-size: clamp(2.7rem, 10vw, var(--h1-font-size));
    text-align: center;
    font-weight: 650;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    letter-spacing: 2.5px;
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
      min-width: 275px;
      text-decoration: none;
      color: var(--text);
      padding: 0.35em 2em;
      border-left: solid 2.25px var(--accent);
      border-right: solid 2.25px var(--accent);
      border-radius: 0.5px;
      &:hover {
        color: var(--accent);
        border-left-color: var(--accent);
        border-right-color: var(--accent);
      }
    }
  }

  @media (740px <= width <= 850px) {
    nav {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
