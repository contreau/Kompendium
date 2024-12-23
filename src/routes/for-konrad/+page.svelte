<script lang="ts">
  import konradPortrait from "$lib/assets/konrad-portrait--375x500-min.jpg";
  import DesktopHeader from "$lib/components/DesktopHeader.svelte";
</script>

<svelte:head>
  <title>Kompendium • For Konrad</title>
</svelte:head>

<DesktopHeader
  heading1="For Konrad"
  secondPage="Playlists"
  secondPageSlug="playlists/1-100"
/>

<section class="content-grid">
  <img
    src={konradPortrait}
    class="konrad-portrait"
    alt="Konrad"
    width="375"
    height="500"
  />
  <div class="memoriam-content">
    <h3>Konrad Manly Rauscher</h3>
    <p class="lifespan">
      <i>March 31, 1995 - October 12, 2024</i>
    </p>

    <div class="memoriam-text">
      <p>
        Between 2013 and 2024, Konrad Rauscher crafted 826 original public
        Spotify playlists totaling 59,903 songs.
      </p>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia curabitur
        sociosqu at, gravida rutrum dictumst. Ridiculus lobortis viverra elit
        erat eget eros nulla sollicitudin. Mattis facilisi dapibus; gravida nunc
        egestas suscipit. At mus ante placerat rhoncus mattis cursus cras. Justo
        libero amet fermentum fringilla mi mollis porttitor.
      </p>
      <p>
        Aliquam ante sociosqu non; aliquet dui massa. Nisi donec vitae urna
        iaculis et dui ac sed. Mauris sed primis tempor integer himenaeos dictum
        sem donec scelerisque. Luctus faucibus ipsum magnis mattis urna felis
        et. Quis auctor per tincidunt euismod pellentesque velit; tempus enim.
        Praesent aliquam varius eget rhoncus hendrerit; odio augue lobortis.
      </p>
    </div>
  </div>
</section>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 30% 68%;
    gap: 2%;
    margin-top: 3rem;
    align-items: center;
  }

  .memoriam-content {
    h3 {
      color: var(--accent);
      font-size: clamp(1rem, 6vw, 2rem);
      margin-top: 0;
      margin-bottom: 0rem;
    }
    p.lifespan {
      font-weight: 700;
      margin: 0.2rem 0;
    }

    p {
      font-size: clamp(1rem, 6vw, 1.25rem);
    }
  }

  .memoriam-text p {
    color: #c8c8c8;
  }

  .konrad-portrait {
    border-radius: 10px;
    filter: grayscale(1);
  }
</style>
