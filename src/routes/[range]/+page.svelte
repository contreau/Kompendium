<script lang="ts">
  import Playlist from "$lib/components/Playlist.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import MobileNav from "$lib/components/MobileNav.svelte";
  import type { PageData } from "./$types";
  let { data }: { data: PageData } = $props();
  const playlists = data["playlists"];
  const currentPageRoute = data["currentPageRoute"];
</script>

<MobileNav rangeLabel={`${currentPageRoute}`} />
<Nav rangeLabel={`${currentPageRoute}`} />

<section class="content-grid">
  {#each playlists as playlist}
    <Playlist
      name={playlist.name}
      url={playlist.url}
      trackCount={playlist.trackCount}
      description={playlist.description}
      dateCreated={playlist.dateCreated}
      tracks={playlist.tracks}
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
