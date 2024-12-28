<script lang="ts">
  import konradPortraitBW from "$lib/assets/konrad-bw--430x570-min.jpg";
  import SecondaryHeader from "$lib/components/SecondaryHeader.svelte";
</script>

<svelte:head>
  <title>Kompendium • For Konrad</title>
</svelte:head>

<SecondaryHeader
  heading1="For Konrad"
  secondPage="Playlists"
  secondPageSlug="playlists/1-100?order=descending"
/>

<section class="content-grid">
  <picture class="konrad-portrait">
    <source
      srcset={konradPortraitBW}
      media="(max-width: 700px)"
      width="225"
      height="300"
    />
    <img
      src={konradPortraitBW}
      alt="Konrad"
      width="375"
      height="500"
      loading="eager"
    />
  </picture>

  <div class="memoriam-content">
    <h3>Konrad Manly Rauscher</h3>
    <p class="lifespan">
      <i>March 31, 1995 - October 12, 2024</i>
    </p>

    <div class="memoriam-text">
      <p>
        Kompendium is the digital preservation of Konrad's immense musical
        curation that he shared with countless friends, family and strangers
        over 11 years. Between 2013 and 2024, he crafted 826 original public
        Spotify playlists totaling 59,903 songs.
      </p>
      <p>
        Nearly all of these playlists were crafted with a loving intent
        surrounding the listener, the location, and the music itself. Many were
        made to be directly paired with or for a particular person, group,
        location, time of day, or emotive state, to create an experience that is
        more than the sum of its parts.
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
      font-size: clamp(1.5rem, 8vw, 2rem);
      margin-top: 0;
      margin-bottom: 0rem;
    }
    p.lifespan {
      font-weight: 700;
      margin: 0.2rem 0;
      font-size: clamp(0.8rem, 5.5vw, 1.25rem);
    }

    p:not(.lifespan) {
      font-size: clamp(0.8rem, 5vw, 1.25rem);
    }
  }

  .memoriam-text p {
    color: #c8c8c8;
  }

  .konrad-portrait {
    justify-self: center;
    img {
      border-radius: 10px;
    }
  }

  @media (max-width: 700px) {
    .content-grid {
      grid-template-columns: 1fr;
      margin-top: 2rem;
    }

    h3,
    p.lifespan {
      text-align: center;
    }

    .memoriam-text {
      margin-top: 2rem;
    }
  }

  @media (700px <= width <= 1270px) {
    .content-grid {
      grid-template-columns: 45% 50%;
      gap: 5%;
      align-items: start;
    }
  }
</style>
