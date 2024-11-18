<script lang="ts">
	import Playlist from '$lib/components/Playlist.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const playlists = data['playlists'];
</script>

<Nav rangeLabel="" />

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
