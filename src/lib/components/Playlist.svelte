<script lang="ts">
	import MusicNote from '$lib/svg/MusicNote.svelte';
	import Calendar from '$lib/svg/Calendar.svelte';
	const props = $props();
	let isOpen = $state(false); // open + close state of details element
	let isExpanded = $state(false); // expanded state of a given playlist
</script>

<div class="playlist" class:isExpanded>
	<div class="playlist--info">
		<h3><a href={props.url} id={props.name} target="__blank">{props.name}</a></h3>
		<div class="track-info">
			<p>
				<span>
					<MusicNote />
					{props.trackCount} songs
				</span>
				<span>
					<Calendar />
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
				location.hash = `#${props.name}`;
			}
		}}
	>
		<summary>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
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
		<ol>
			{#each props.tracks as track}
				<li>
					<a href={track.url} target="_blank">{track.name}</a> ••
					{#each track.artists as artist, i}
						{#if i === track.artists.length - 1}
							{artist}
						{:else}
							{artist}, &nbsp;
						{/if}
					{/each}
				</li>
			{/each}
		</ol>
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
		font-size: clamp(1.4rem, 6vw, 1.7rem);
		margin: 1rem 0;
	}

	.playlist {
		border: solid 1.5px #232323;
		border-radius: 12px;
		padding-top: 0.25em;
		padding-bottom: 0.25em;
		padding-inline: 1.5em;
		transition: 0.3s all;

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
		padding-left: 1.5em;
		font-size: clamp(1rem, 4vw, 1.4rem);
	}

	li + li {
		margin-top: 1.5rem;
	}

	details {
		margin-bottom: 1rem;
		margin-top: 1rem;

		summary {
			list-style: none;
			font-size: clamp(1rem, 6vw, 1.2rem);
			font-weight: 500;
			cursor: pointer;
			display: flex;
			align-items: center;
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
</style>
