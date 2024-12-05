<script lang="ts">
  import { routeEntries } from "$lib/routes";
  import { invalidate } from "$app/navigation";
  import ButtonArrowSVG from "$lib/svg/ButtonArrowSVG.svelte";
  const props = $props();

  let currentRoute = routeEntries.find(
    (entry) => entry.range === props.rangeLabel
  ) || {
    lastPageRoute: null,
    nextPageRoute: null,
  };

  function navigateAndRefresh(href: string) {
    invalidate(href);
    // Ensure the href is treated as an absolute path
    window.location.href = new URL(href, window.location.origin).toString();
  }
</script>

<nav class="mobileNav">
  <!-- Label -->
  {#if props.rangeLabel != ""}
    <p class="playlist-label">
      Playlists <span>{props.rangeLabel}</span>
    </p>
  {/if}

  <!-- Buttons -->
  <ul class="nav-buttons">
    {#if currentRoute.lastPageRoute !== null && currentRoute.lastPageRoute !== "/"}
      <a
        href="/playlists/{currentRoute.lastPageRoute}"
        onclick={() =>
          navigateAndRefresh(`/playlists/${currentRoute.lastPageRoute}`)}
        aria-label="Navigate to previous page of playlists"
      >
        <li class="page-last"><ButtonArrowSVG /></li>
      </a>
    {:else}
      <a
        href="/"
        onclick={() => navigateAndRefresh("/")}
        aria-label="Navigate to home page"
      >
        <li class="page-last"><ButtonArrowSVG /></li>
      </a>
    {/if}
    {#if currentRoute.nextPageRoute !== null}
      <a
        onclick={() =>
          navigateAndRefresh(`/playlists/${currentRoute.nextPageRoute}`)}
        href="/playlists/{currentRoute.nextPageRoute}"
        aria-label="Navigate to next page of playlists"
      >
        <li class="page-advance"><ButtonArrowSVG /></li>
      </a>
    {/if}
  </ul>
</nav>

<style>
  @media (min-width: 770px) {
    nav {
      display: none;
    }
  }
  nav {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    border-top: solid 2px #9f94fe2c;
  }

  .playlist-label {
    font-size: clamp(1rem, 8vw, 1.7rem);
    font-weight: 550;
    text-align: center;
  }

  ul {
    display: flex;
    padding-inline: 0;
    justify-content: center;
    gap: 1rem;
  }

  li.page-advance,
  li.page-last {
    list-style-type: none;
    font-size: clamp(1rem, 8vw, 1.3rem);
    background-color: var(--background);
    border-radius: 50%;
    min-height: 45px;
    max-width: 45px;
    width: 100%;
    text-align: center;
    border: solid 1.5px var(--accent);
    padding-inline: 0.4em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    transition: 0.3s all;
  }

  li.page-last {
    transform: rotate(180deg);
  }
</style>
