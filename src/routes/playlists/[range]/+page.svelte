<script lang="ts">
  import Playlist from "$lib/components/Playlist.svelte";
  import PlaylistFilters from "$lib/components/PlaylistFilters.svelte";
  import type { PageData } from "./$types";
  import { store } from "$lib/state/store.svelte";
  let { data }: { data: PageData } = $props();

  // Playlist component prop (reactive)
  const playlists = $derived(data["playlists"]);

  // PlaylistFilters component props (currentPageRoute is reactive)
  const currentPageRoute = $derived(data["currentPageRoute"]);
  store.viewingOrder = data["viewingOrder"]; // sets the viewingOrder as global state

  function calculate_index(route: string, index: number) {
    return route === "1-100" ? index : index + Number(route[0]) * 100;
  }
</script>

<PlaylistFilters rangeLabel={`${currentPageRoute}`} />

<section class="content-grid">
  {#each playlists as playlist, index}
    <Playlist
      index={calculate_index(currentPageRoute, index)}
      name={playlist.name}
      url={playlist.url}
      trackCount={playlist.trackCount}
      description={playlist.description}
      dateCreated={playlist.dateCreated}
      viewingOrder={store.viewingOrder}
    />
  {/each}
</section>

<style>
  /* Playlist Listing Grid */
  .content-grid {
    display: grid;
    column-gap: 2rem;
    row-gap: 3rem;
    align-items: start;
    grid-template-columns: repeat(var(--cols), minmax(250px, 1fr));
  }
</style>
