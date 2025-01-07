<script lang="ts">
  const props = $props();
  if (props.secondPageSlug.includes("playlists")) {
  }
</script>

<header>
  <h1>{props.heading1}</h1>
  <nav>
    <p class="nav-item">
      <a data-sveltekit-preload-data href="/">Kompendium</a><span
        class="separator">|</span
      ><a data-sveltekit-preload-data href="/{props.secondPageSlug}"
        >{props.secondPage}</a
      >
    </p>
  </nav>
</header>

<style>
  header {
    border-bottom: solid 2px var(--faded-pink);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: clamp(3.2rem, 6.5vw, var(--h1-font-size));
    font-weight: 650;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    letter-spacing: 2.5px;
  }

  nav p {
    font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;

    a {
      color: var(--accent);
    }
  }

  @media (max-width: 700px) {
    header {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
</style>
