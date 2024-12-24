<script lang="ts">
  import { goto, invalidate } from "$app/navigation";
  const props = $props();

  let viewingOrder = $state(props.viewingOrder);
  let selectedRange = $state(props.rangeLabel);

  async function refreshView(href: string) {
    await goto(`/playlists/${href}?order=${viewingOrder}`);
    await invalidate(`/playlists/${href}?order=${viewingOrder}`);
  }
</script>

<section class="filters">
  <h3>Showing Playlists <span>{selectedRange}</span></h3>
  <div class="controls">
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
  </div>
</section>

<style>
  section.filters {
    margin-top: 3.25rem;
    margin-bottom: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  h3 {
    font-size: clamp(1.2rem, 6vw, 2rem);
    margin-top: 0;
    margin-bottom: 0;

    span {
      color: var(--accent);
    }
  }

  select {
    background-color: var(--background);
    color: var(--text);
    padding: 0.7em 0.8em;
    padding-right: 1.4em;
    border-style: none;
    border-radius: 5px;
    border: solid 2px var(--accent);
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s all;
    appearance: none;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZWRlZGVlIiBkPSJNNy40MSA4LjU5TDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2bC02LTZ6Ii8+PC9zdmc+");
    background-repeat: no-repeat;
    background-size: 1.8rem;
    background-position: right 5px center;

    &:hover {
      background-color: #1e1d20;
    }
  }

  @media (max-width: 650px) {
    select#playlist-order {
      min-width: 145px;
    }

    select#playlist-ranges {
      min-width: 120px;
    }
  }

  @media (min-width: 651px) {
    select#playlist-order {
      min-width: 170px;
    }

    select#playlist-ranges {
      min-width: 140px;
    }
  }

  @media (max-width: 800px) {
    section.filters {
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .controls {
      gap: 0.75rem;
    }
  }
</style>
