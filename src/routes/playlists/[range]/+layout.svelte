<script>
  let { children } = $props();
  import DesktopHeader from "$lib/components/DesktopHeader.svelte";
</script>

<svelte:head>
  <title>Kompendium • Playlists</title>
</svelte:head>

<DesktopHeader
  heading1="Playlists"
  secondPage="For Konrad"
  secondPageSlug="for-konrad"
/>

<main>
  {@render children()}
</main>

<style>
  /* these media queries responsively change the # of playlists that are displayed in the grid */
  @media (565px <= width <= 800px) {
    :root {
      --cols: 1;
    }
  }

  @media (800px <= width <= 1300px) {
    :root {
      --cols: 2;
    }
  }

  @media (min-width: 1300px) {
    :root {
      --cols: 3;
    }
  }
</style>
