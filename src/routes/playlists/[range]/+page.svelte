<script lang="ts">
  import Playlist from "$lib/components/Playlist.svelte";
  import PlaylistFilters from "$lib/components/PlaylistFilters.svelte";
  import type { PageData } from "./$types";
  import { store } from "$lib/state/store.svelte";
  let { data }: { data: PageData } = $props();

  // Playlist component prop (reactive)
  const playlists = $derived(data["playlists"]);

  // Sets the values for both playlistRange and viewingOrder in the global state (store.svelte.ts)
  store.playlistRange = data["currentPageRoute"];
  store.viewingOrder = data["viewingOrder"];

  // Scroll button's opacity state
  let scrollButton_visible = $state(false);

  function calculate_index(route: string, index: number) {
    return route === "1-100" ? index : index + Number(route[0]) * 100;
  }

  function reveal_scrollButton() {
    scrollButton_visible = window.scrollY >= 1000 ? true : false;
  }

  async function scroll_handler() {
    if (location.hash.includes("playlist")) {
      // scrolls to the top of the currently opened/viewed playlist
      const playlist_id = location.hash.slice(9, location.hash.length); // this cuts the 'playlist' prefix from the id found on the <h3>'s' <a> tag in Playist.svelte components
      const temp = document.querySelector(`#playlist${playlist_id}`);
      location.hash = ""; // clears the hash in the url
      temp?.scrollIntoView();
    } else if (location.hash === "") {
      // scrolls to top of page
      scrollTo(0, 0);
    }
  }
</script>

<svelte:window onscroll={reveal_scrollButton} />

<PlaylistFilters />

<section class="content-grid">
  {#each playlists as playlist, index}
    <Playlist
      index={calculate_index(store.playlistRange, index)}
      name={playlist.name}
      url={playlist.url}
      trackCount={playlist.trackCount}
      description={playlist.description}
      dateCreated={playlist.dateCreated}
      viewingOrder={store.viewingOrder}
      playlistRange={store.playlistRange}
    />
  {/each}
</section>

<button
  aria-label="Scroll to top of page"
  class="sticky-button {scrollButton_visible ? 'visible' : ''}"
  onclick={scroll_handler}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    ><g fill="none"
      ><path
        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
      /><path
        fill="#0e0d11"
        d="M12.707 3.636a1 1 0 0 0-1.414 0L5.636 9.293a1 1 0 1 0 1.414 1.414L11 6.757V20a1 1 0 1 0 2 0V6.757l3.95 3.95a1 1 0 0 0 1.414-1.414z"
      /></g
    ></svg
  >
</button>

<style>
  /* Playlist Listing Grid */
  .content-grid {
    display: grid;
    column-gap: 2rem;
    row-gap: 3rem;
    align-items: start;
    grid-template-columns: repeat(var(--cols), minmax(250px, 1fr));
  }

  .sticky-button {
    opacity: 0;
    position: sticky;
    left: 92.5%;
    bottom: 6.25rem;
    height: 60px;
    width: 60px;
    display: grid;
    place-items: center;
    cursor: pointer;
    background-color: var(--accent);
    border: solid 2px var(--accent);
    border-radius: 50%;
    transition:
      background-color 0.2s,
      opacity 0.4s;

    &:hover {
      background-color: #406bce;
    }

    svg {
      margin: 0;
      width: 40px;
      height: 40px;
    }
  }

  .visible {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    .sticky-button {
      bottom: 2rem;
    }
  }

  @media (max-width: 850px) {
    .sticky-button {
      min-height: 15px;
      min-width: 15px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
