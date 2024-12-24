<script lang="ts">
  import { playlistRoutes } from "$lib/routes";
  import { goto, invalidate } from "$app/navigation";
  import ButtonArrowSVG from "$lib/svg/ButtonArrowSVG.svelte";
  const props = $props();

  let currentRoute = playlistRoutes.find(
    (entry) => entry.range === props.rangeLabel
  ) || {
    lastPageRoute: null,
    nextPageRoute: null,
  };

  let viewingOrder = $state(props.viewingOrder);
  let selectedRange = $state(props.rangeLabel);

  async function refreshView(href: string) {
    await goto(`/playlists/${href}?order=${viewingOrder}`);
    await invalidate(`/playlists/${href}?order=${viewingOrder}`);
  }
</script>

<select
  name="playlist-order"
  id="playlist-order"
  bind:value={viewingOrder}
  onchange={() => refreshView(`${selectedRange}`)}
>
  <option value="descending">Descending</option>
  <option value="ascending">Ascending</option>
</select>

<select
  name="playlist-ranges"
  id="playlist-ranges"
  bind:value={selectedRange}
  onchange={() => refreshView(`${selectedRange}`)}
>
  <option value="1-100">1-100</option>
  <option value="101-200">101-200</option>
  <option value="201-300">201-300</option>
  <option value="301-400">301-400</option>
  <option value="401-500">401-500</option>
  <option value="501-600">501-600</option>
  <option value="601-700">601-700</option>
  <option value="701-800">701-800</option>
  <option value="801-826">801-826</option>
</select>

<nav>
  <ul>
    {#if currentRoute.lastPageRoute !== null && currentRoute.lastPageRoute !== "/"}
      <!-- <a href="/playlists/{currentRoute.lastPageRoute}"> -->
      <li class="page-last"><ButtonArrowSVG /></li>
      <!-- </a> -->
    {:else}
      <!-- <a href="/"> -->
      <li class="page-last"><ButtonArrowSVG /></li>
      <!-- </a> -->
    {/if}

    {#if props.rangeLabel !== ""}
      <!-- <li class="playlist-label"> -->
      Playlists <span>{props.rangeLabel}</span>
      <!-- </li> -->
    {/if}

    {#if currentRoute.nextPageRoute !== null}
      <!-- <a href="/playlists/{currentRoute.nextPageRoute}"> -->
      <li class="page-advance">
        <ButtonArrowSVG />
      </li>
      <!-- </a> -->
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

    nav {
      li.page-advance,
      li.page-last {
        border-radius: 50%;
      }
    }
  }
</style>
