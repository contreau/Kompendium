<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import MobileNav from "$lib/components/MobileNav.svelte";
  import SpotifySVG from "$lib/svg/SpotifySVG.svelte";
</script>

<svelte:head>
  <title>Konrad's Songbook</title>
</svelte:head>

<header>
  <div>
    <h1>Konrad's Songbook</h1>
    <p class="stats">
      <span class="stats-item"><span>826</span> Original Playlists</span>
      <span class="stats-item separator">•</span>
      <span class="stats-item">
        <span>59,903</span>
        Songs
      </span>
      <span class="stats-item separator">•</span>
      <a
        href="https://open.spotify.com/user/1261690341?si=235dbc5649f8441e"
        target="_blank"><SpotifySVG /></a
      >
      <span class="separator">•</span>
      <a href="/in-memoriam">In Memoriam</a>
    </p>
  </div>
</header>

<main>
  <MobileNav rangeLabel="" />
  <Nav rangeLabel="" />
</main>
