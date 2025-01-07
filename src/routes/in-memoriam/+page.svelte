<script lang="ts">
  import konradPortraitBW from "$lib/assets/konrad-bw--430x570-min.jpg";
  import konradPortraitLarge from "$lib/assets/konrad-bw--603x800-min.jpg";
  import SecondaryHeader from "$lib/components/SecondaryHeader.svelte";
</script>

<svelte:head>
  <title>Kompendium • In Memoriam</title>
</svelte:head>

<SecondaryHeader
  heading1="In Memoriam"
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
    <source
      srcset={konradPortraitLarge}
      media="(min-width: 1600px)"
      width="603"
      height="800"
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
        <a
          href="https://www.legacy.com/us/obituaries/legacyremembers/konrad-rauscher-obituary?id=56713019"
          target="_blank">Rest in paradise, Konrad</a
        >
        <svg
          class="heart"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            fill="#5770e9"
            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
          /></svg
        >
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
      font-size: clamp(1.15rem, 1.6vw, 1.5rem);
    }

    p:not(.lifespan) {
      font-size: clamp(1.15rem, 1.6vw, 1.5rem);
    }
  }

  .memoriam-text p {
    color: #c8c8c8;
    font-weight: 300;
  }

  svg.heart {
    vertical-align: -3px;
    height: clamp(1.1rem, 1.5vw, 1.5rem);
    width: clamp(1.1rem, 1.5vw, 1.5rem);
  }

  .konrad-portrait {
    justify-self: center;
    img {
      border-radius: 10px;
    }
  }

  @media (max-width: 770px) {
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

  @media (771px <= width <= 1270px) {
    .content-grid {
      grid-template-columns: 45% 50%;
      gap: 5%;
      align-items: start;
    }
  }

  @media (min-width: 1600px) {
    .memoriam-content {
      h3 {
        font-size: clamp(2rem, 8vw, 2.7rem);
      }
      p.lifespan {
        font-size: clamp(1.6rem, 1.6vw, 2rem);
      }

      p:not(.lifespan) {
        font-size: clamp(1.6rem, 1.6vw, 1.8rem);
      }
    }
  }
</style>
