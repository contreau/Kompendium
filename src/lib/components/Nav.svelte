<script lang="ts">
  import { playlistRoutes } from "$lib/routes";
  import { invalidate } from "$app/navigation";
  import ButtonArrowSVG from "$lib/svg/ButtonArrowSVG.svelte";
  const props = $props();

  let currentRoute = playlistRoutes.find(
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

<nav>
  <ul>
    {#if currentRoute.lastPageRoute !== null && currentRoute.lastPageRoute !== "/"}
      <a
        href="/playlists/{currentRoute.lastPageRoute}"
        onclick={() =>
          navigateAndRefresh(`/playlists/${currentRoute.lastPageRoute}`)}
      >
        <li class="page-last"><ButtonArrowSVG /></li>
      </a>
    {:else}
      <a href="/" onclick={() => navigateAndRefresh("/")}>
        <li class="page-last"><ButtonArrowSVG /></li>
      </a>
    {/if}

    {#if props.rangeLabel !== ""}
      <li class="playlist-label">
        Playlists <span>{props.rangeLabel}</span>
      </li>
    {/if}

    {#if currentRoute.nextPageRoute !== null}
      <a
        onclick={() =>
          navigateAndRefresh(`/playlists/${currentRoute.nextPageRoute}`)}
        href="/playlists/{currentRoute.nextPageRoute}"
      >
        <li class="page-advance">
          <ButtonArrowSVG />
        </li>
      </a>
    {/if}
  </ul>
</nav>

<style>
  @media (max-width: 770px) {
    nav {
      display: none;
    }
  }
  nav {
    padding-top: 5rem;
    padding-bottom: 5rem;
    /* border-top: solid 2px #9f94fe2c; */
    ul {
      margin-top: 0;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      list-style-type: none;
      padding-left: 0;
    }
    li.playlist-label {
      font-size: clamp(1rem, 8vw, 1.7rem);
      font-weight: 550;
    }

    /* li.separator {
      font-size: clamp(1rem, 8vw, 1.5rem);
    } */

    li.page-advance,
    li.page-last {
      font-size: clamp(1rem, 8vw, 1.3rem);
      background-color: var(--background);
      border-radius: 10px;
      border: solid 1.5px var(--accent);
      border-radius: 50%;
      min-height: 45px;
      max-width: 45px;
      width: 100%;
      text-align: center;
      padding-inline: 0.4em;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
      transition: 0.3s all;

      &:hover {
        border-color: var(--text);
        color: var(--text);
      }
    }
  }

  li.page-last {
    transform: rotate(180deg);
  }

  @media (max-width: 770px) {
    ul {
      flex-direction: column;
      gap: 0rem;
    }
    .playlist-label {
      order: -1;
    }
    nav {
      li.page-advance,
      li.page-last {
        border-radius: 50%;
      }
    }
  }
</style>
