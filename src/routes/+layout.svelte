<script>
  let { children } = $props();
</script>

{@render children()}

<style>
  :global {
    :root {
      --text: #ededee;
      --background: #0e0d11;
      --primary: #b1aec8;
      --secondary: #3d3964;
      --accent: #a095ff;
      --page-border: #a095ff7e;
      --cols: auto-fit;
      --track-cols: auto-fit;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding: 4rem;
    }

    @media (min-width: 800px) {
      html {
        border-left: solid 3px var(--page-border);
        border-right: solid 3px var(--page-border);
        border-radius: 2px;
      }
    }

    body {
      min-height: 100vh;
      line-height: 1.6;
      font-family: system-ui;
      color: var(--text);
      padding-inline: 2em;
      background-color: var(--background);
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    a {
      color: #c0b9ff;
    }

    @media (max-width: 800px) {
      body {
        padding-inline: 1em;
      }
      header {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        text-align: center;
      }
    }

    main {
      margin-bottom: 2.5rem;
    }
  }
</style>
