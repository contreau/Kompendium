<script lang="ts">
  import Playlist from "$lib/components/Playlist.svelte";
  import PlaylistNav from "$lib/components/PlaylistNav.svelte";
  import MobileNav from "$lib/components/MobileNav.svelte";
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();

  // Playlist component prop (reactive)
  const playlists = $derived(data["playlists"]);

  // PlaylistNav component props (currentPageRoute is reactive)
  const currentPageRoute = $derived(data["currentPageRoute"]);
  const viewingOrder = data["viewingOrder"];

  function calculate_index(route: string, index: number) {
    return route === "1-100" ? index : index + Number(route[0]) * 100;
  }
  // removed prop: tracks={playlist.tracks}
</script>

<MobileNav rangeLabel={`${currentPageRoute}`} />
<PlaylistNav rangeLabel={`${currentPageRoute}`} {viewingOrder} />

<section class="content-grid">
  {#each playlists as playlist, index}
    <Playlist
      index={calculate_index(currentPageRoute, index)}
      name={playlist.name}
      url={playlist.url}
      trackCount={playlist.trackCount}
      description={playlist.description}
      dateCreated={playlist.dateCreated}
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
