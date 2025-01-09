<script lang="ts">
  import Wave from "$lib/components/Wave.svelte";
  import MobileLanding from "$lib/components/MobileLanding.svelte";
  import { browser } from "$app/environment";
</script>

<svelte:head>
  <title>Kompendium • For Konrad Rauscher</title>
  <meta name="author" content="Conor Kelley" />

  <meta
    name="description"
    content="An interactive archive of Konrad Rauscher's 826 curated Spotify playlists."
  />
  <meta
    property="og:description"
    content="An interactive archive of Konrad Rauscher's 826 curated Spotify playlists."
  />
  <meta name="title" content="Kompendium • For Konrad Rauscher" />
  <meta property="og:title" content="Kompendium • For Konrad Rauscher" />
</svelte:head>

{#if browser && window.screen.availWidth <= 851}
  <div class="centering-wrapper">
    <MobileLanding />
  </div>
{:else}
  <div class="large-device-visible">
    <header>
      <h1>Kompendium</h1>
      <div class="subtitle-container">
        <p class="subtitle-item byline">
          For <a
            href="https://open.spotify.com/user/1261690341?si=d3127b482cc14c4b"
            target="_blank">Konrad Rauscher</a
          >
        </p>
        <div class="separator">|</div>
        <p class="subtitle-item"><span>11</span> Years</p>
        <div class="separator">|</div>
        <p class="subtitle-item"><span>826</span> Original Playlists</p>
        <div class="separator">|</div>
        <p class="subtitle-item"><span>59,903</span> Songs</p>
      </div>
    </header>
    <div class="responsive-wrapper">
      <nav class="site-links">
        <p>
          <a
            data-sveltekit-preload-data
            href="/playlists/1-100?order=descending">Playlists</a
          >
        </p>
        <p data-sveltekit-preload-data>
          <a href="/in-memoriam">In Memoriam</a>
        </p>
      </nav>
      <!-- WAVE VISUAL -->
      <Wave />
    </div>
  </div>
{/if}

<style>
  @media (max-width: 851px) {
    .large-device-visible {
      display: none;
    }
  }

  @media (min-width: 2100px) {
    .responsive-wrapper {
      margin-top: 10%;
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }

  .centering-wrapper {
    /* centers landing page on phone and tablet */
    opacity: 0;
    transition: opacity;
    min-height: 100vh;
    align-content: center;
    animation: fadeIn 0.75s forwards;
  }

  .subtitle-container {
    display: flex;
    align-items: center;

    .subtitle-item {
      font-size: clamp(1rem, 2.5vw, 1.65rem);
      font-weight: 450;
      margin-top: 1rem;
      margin-bottom: 1rem;
      position: relative;
    }

    .subtitle-item span {
      color: var(--accent);
    }
  }

  .separator {
    font-size: clamp(1rem, 2.5vw, 1.65rem);
  }

  header {
    border-bottom: solid 2px var(--faded-pink);
  }

  nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5.5rem;
    margin-bottom: 5.5rem;

    p {
      text-align: center;
      font-size: clamp(1.5rem, 3.3vw, 2rem);
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    a {
      text-decoration: none;
      display: inline-block;
      min-width: 330px;
      color: var(--text);
      padding: 0.35em 2em;
      border-left: solid 2.25px var(--accent);
      border-right: solid 2.25px var(--accent);
      border-radius: 0.5px;
      &:hover {
        color: var(--accent);
        border-left-color: var(--text);
        border-right-color: var(--text);
      }
    }
  }

  h1 {
    font-size: clamp(2.7rem, 10vw, var(--h1-font-size));
    font-weight: 650;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    letter-spacing: 2.5px;
  }
</style>
