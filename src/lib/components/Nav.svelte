<script lang="ts">
	import { routeEntries } from '$lib/routes';
	import { invalidate } from '$app/navigation';
	const props = $props();

	let currentRoute = routeEntries.find((entry) => entry.range === props.rangeLabel) || {
		lastPageRoute: null,
		nextPageRoute: null
	};

	function navigateAndRefresh(href: string) {
		invalidate(href);
		// Ensure the href is treated as an absolute path
		window.location.href = new URL(href, window.location.origin).toString();
	}
</script>

<nav>
	<ul>
		{#if currentRoute.lastPageRoute !== null}
			<li class="page-last">
				<a
					href="/{currentRoute.lastPageRoute}/"
					onclick={() => navigateAndRefresh(currentRoute.lastPageRoute)}>Previous 100 Playlists</a
				>
			</li>
		{/if}
		{#if currentRoute.nextPageRoute === null}
			<li class="separator">•</li>
		{/if}
		<li class="playlist-label">
			Playlists
			{#if props.rangeLabel === ''}
				<span>1-100</span>
			{:else}
				<span>{props.rangeLabel}</span>
			{/if}
		</li>
		{#if currentRoute.lastPageRoute === null && currentRoute.nextPageRoute !== null}
			<li class="separator">•</li>
		{/if}
		{#if currentRoute.nextPageRoute !== null}
			<li class="page-advance">
				<a
					onclick={() => navigateAndRefresh(currentRoute.nextPageRoute)}
					href="/{currentRoute.nextPageRoute}/">Next 100 Playlists</a
				>
			</li>
		{/if}
	</ul>
</nav>

<style>
	nav {
		padding-top: 5rem;
		padding-bottom: 5rem;
		border-top: solid 2px #9f94fe2c;
		ul {
			margin-top: 0;
			margin-bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 3rem;
			list-style-type: none;
			padding-left: 0;
		}
		li.playlist-label {
			font-size: clamp(1rem, 8vw, 1.7rem);
			font-weight: 550;
		}

		li.separator {
			font-size: clamp(1rem, 8vw, 1.5rem);
		}

		li.page-advance,
		li.page-last {
			font-size: clamp(1rem, 8vw, 1.3rem);
			background-color: var(--background);
			border-radius: 10px;
			border: solid 1.5px var(--accent);
			padding-inline: 0.4em;
			padding-top: 0.2em;
			padding-bottom: 0.2em;
			transition: 0.3s all;
			&:hover,
			&:hover a {
				border-color: var(--text);
				color: var(--text);
			}

			a {
				transition: 0.3s all;
				color: var(--accent);
				font-weight: 450;
				text-decoration: none;
			}
		}
	}
</style>
