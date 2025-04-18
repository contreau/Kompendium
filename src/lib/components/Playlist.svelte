<script lang="ts">
  import MusicNoteSVG from "$lib/svg/MusicNoteSVG.svelte";
  import CalendarSVG from "$lib/svg/CalendarSVG.svelte";
  import AlbumSVG from "$lib/svg/AlbumSVG.svelte";
  import ArtistSVG from "$lib/svg/ArtistSVG.svelte";
  import type { Tracks } from "$lib/types";
  import { store } from "$lib/state/store.svelte";
  import { onMount } from "svelte";
  const props = $props();

  let isOpen = $state(false); // open + close state of details element
  let isExpanded = $state(false); // expanded state of a given playlist
  let tracklistPromise: Promise<Tracks[]> | [] = $state([]);
  let loadedTracklist = $state(false);
  let currentViewingOrder = $state(props.viewingOrder);
  let currentPlaylistRange = $state(props.playlistRange);

  // runs every time the <select> inputs are toggled
  // necessary so that after the UI changes, the correct playlists can be fetched on hover
  $effect(() => {
    // for viewingOrder selection
    if (currentViewingOrder !== store.viewingOrder) {
      if (loadedTracklist) {
        loadedTracklist = false;
        currentViewingOrder = store.viewingOrder;
      }
    }
    // for playlistRange selection
    if (currentPlaylistRange !== store.playlistRange) {
      if (loadedTracklist) {
        loadedTracklist = false;
        currentPlaylistRange = store.playlistRange;
      }
    }
  });

  // playlists should be saved to sessionStorage when loaded, and any subsequent loads of the same thing should retrieve from sessionStorage
  async function check_sessionStorage(index: number): Promise<Tracks[] | []> {
    const stored = sessionStorage.getItem(`${store.viewingOrder}${index}`);
    const data = stored !== null ? (JSON.parse(stored) as Tracks[]) : [];
    return data;
  }

  // 'order' query string value should never be props.viewingOrder - because props don't update reactively/automatically by default. it needs to be the from the global state (store.viewingOrder), since it's being updated and tracked across components
  async function retrieve_tracklist(index: number) {
    if (!loadedTracklist) {
      // checks sessionStorage first
      const storedTracklist = await check_sessionStorage(index);
      if (storedTracklist.length !== 0) {
        tracklistPromise = new Promise((res) => res(storedTracklist));
        loadedTracklist = true;
        // console.log("retrieved from storage!");
      } else {
        // retrieves from api otherwise
        const response = await fetch(
          `/api/tracklists?id=${index}&order=${store.viewingOrder}`
        );
        const tracklist: Tracks[] = await response.json();
        tracklistPromise = new Promise((res) => res(tracklist));
        loadedTracklist = true;
        sessionStorage.setItem(
          `${store.viewingOrder}${index}`,
          JSON.stringify(tracklist)
        );
        // console.log("retrieved from api.");
      }
    }
  }

  // create an intersection observer with the div.playlist to fetch the tracklist data
  let target: HTMLDivElement;
  onMount(() => {
    if (window.screen.availWidth <= 1200) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              retrieve_tracklist(Number(target.id));
            }
          });
        },
        {
          threshold: [0.5, 1],
        }
      );
      observer.observe(target);
    }
  });
</script>

<div
  class="playlist"
  id={props.index}
  bind:this={target}
  class:isExpanded
  onmouseenter={() => retrieve_tracklist(props.index)}
  role="button"
  tabindex="0"
  onfocus={() => retrieve_tracklist(props.index)}
>
  <div class="playlist--info">
    <h3>
      <a href={props.url} id="playlist{props.index}" target="__blank"
        >{props.name}</a
      >
    </h3>
    <div class="track-info">
      <p>
        <span>
          <MusicNoteSVG />
          {props.trackCount} songs
        </span>
        <span>
          <CalendarSVG />
          {props.dateCreated}
        </span>
      </p>
    </div>
  </div>

  {#if props.description}
    <p class="description"><em>{props.description}</em></p>
  {/if}

  <hr />

  <details
    bind:open={isOpen}
    ontoggle={() => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        // navigates to the clicked playlist anchor / updates the url
        location.hash = `#playlist${props.index}`;
      }
    }}
  >
    <summary>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v14m-7-7h14"
        />
      </svg>
      {#if isOpen}
        Collapse Songs
      {:else}
        View Songs
      {/if}
    </summary>
    {#await tracklistPromise then tracklist}
      <ol>
        {#each tracklist as track}
          <li>
            <div class="track-item">
              <a class="track-name" href={track.url} target="_blank"
                >{track.name}</a
              >
            </div>
            <div class="artist-block track-item">
              <ArtistSVG />
              {#each track.artists as artist, i}
                {#if i === track.artists.length - 1}
                  {artist}
                {:else}
                  {artist}, &nbsp;
                {/if}
              {/each}
            </div>
            <div class="album-block track-item">
              <AlbumSVG />
              {track.album}
            </div>
          </li>
        {/each}
      </ol>
    {/await}
  </details>
</div>

<style>
  @media (min-width: 800px) {
    .isExpanded {
      grid-column: 1 / -1;
    }
    .playlist:has(details[open]) {
      grid-column: 1 / -1;
    }
  }

  h3 {
    font-weight: 375;
    font-size: clamp(1.2rem, 6vw, 1.7rem);
    margin: 1rem 0;
  }

  .playlist {
    border: solid 1.5px #232323;
    border-radius: 12px;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-inline: 1.5em;
    transition: 0.3s all;

    &:focus-visible {
      outline: transparent;
      border-color: var(--accent);
    }

    hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: solid 1px #232323;
      border-radius: 2px;
    }
  }

  .track-info {
    max-width: fit-content;
    gap: 0.25rem;

    p {
      font-size: clamp(1.05rem, 5vw, 1.2rem);
      font-weight: 450;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  @media (max-width: 730px) {
    .track-info {
      p {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  .playlist--info {
    display: block;
    align-items: center;
    gap: 2.5rem;
  }

  .description {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  ol {
    display: grid;
    grid-template-columns: repeat(var(--track-cols), minmax(250px, 40%));
    row-gap: clamp(1.5rem, 8vw, 5rem);
    justify-content: space-around;
    font-size: clamp(1rem, 4vw, 1.4rem);

    div.album-block {
      padding-bottom: 0.5em;
      border-bottom: solid 2px var(--faded-blue);
    }
  }

  .artist-block,
  .album-block {
    font-weight: 300;
  }

  @media (min-width: 1440px) {
    ol {
      padding-left: 0;
    }
  }

  /* ensures that for that viewports up until desktops, the song display will be one column (easy scrolling) */
  @media (max-width: 1200px) {
    ol {
      display: block;
    }
  }

  /* next few media queries responsively change the # of columns that display tracks when a playlist is opened */

  @media (max-width: 1200px) {
    :root {
      --track-cols: 1;
    }
  }

  @media (min-width: 1201px) {
    :root {
      --track-cols: 2;
    }
  }

  /* provides a little spacing between tracks on mobile */
  @media (max-width: 1200px) {
    li + li {
      margin-top: 3rem;
    }
  }

  .track-item + .track-item {
    margin-top: 0.8rem;
  }

  a.track-name {
    padding-left: 0.25em;
  }

  details {
    margin-bottom: 1rem;
    margin-top: 1rem;

    summary {
      list-style: none;
      font-size: clamp(1rem, 6vw, 1.2rem);
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: color 0.2s;
      &:hover,
      &:hover > svg path {
        color: #afafaf;
        stroke: #afafaf;
      }
      &:focus-visible {
        outline: solid 1.5px var(--accent);
        border-radius: 5px;
      }
    }

    summary::-webkit-details-marker {
      display: none;
    }
  }

  details summary svg {
    transition: transform 0.3s;
  }

  details[open] summary svg {
    transform: rotate(45deg);
  }

  :global svg {
    margin-right: 0.2rem;
  }

  svg path {
    transition: stroke 0.2s;
  }
</style>
