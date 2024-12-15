<template>
  <section class="team-section">
    <div class="team-category">
      <h2>Core Developers</h2>
      <p>&nbsp;</p>
      <div class="team-member core-developers" :class="{ 'reverse': index % 2 !== 0 }" v-for="(member, index) in coreDevelopers" :key="member.name">
        <a :href="member.github" target="_blank">
          <img :src="member.image" :alt="member.name" />
        </a>
        <div class="info" :class="{ 'align-right': index % 2 !== 0 }">
          <a :href="member.github" target="_blank"><h3>{{ member.name }} <span>({{ member.username }})</span></h3></a>
          <p><strong>Role:</strong> <i>{{ member.role }}</i></p>
        </div>
      </div>
    </div>

    <div class="team-category">
      <h2>Other Contributors</h2>
      <div class="contributors-grid">
        <div class="contributor" v-for="contributor in contributors" :key="contributor.name">
          <a :href="contributor.link" target="_blank">
            <img :src="contributor.image" :alt="contributor.name" />
          </a>
          <a :href="contributor.link" target="_blank"><p><strong>{{ contributor.name }}</strong></p></a>
          <p>{{ contributor.contributions }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { coreDevelopers, contributors } from './teamData.js';
export default {
  data() {
    return {
      coreDevelopers,
      contributors
    };
  }
};
</script>

<style>
  .team-section {
    font-family: Arial, sans-serif;
    padding: 2em;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  .team-category {
    margin-top: 2em;
    width: 100%;
  }

  .core-developers {
    max-width: 1000px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2em;
    border-bottom: 2px solid #ccc;
    padding-bottom: 0.5em;
  }

  .team-member {
    display: flex;
    align-items: center;
    margin-bottom: 1.5em;
  }

  .team-member.reverse {
    flex-direction: row-reverse;
  }

  .team-member img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 1em;
  }

  .team-member.reverse img {
    margin-right: 0;
    margin-left: 1em;
  }

  .team-member .info {
    max-width: 600px;
  }

  .team-member .info.align-right {
    text-align: right;
  }

  .team-member h3 {
    margin: 0;
    font-size: 1.5em;
  }

  .team-member h3 span {
    font-size: 1em;
    color: #777;
  }

  .contributors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1em;
    justify-items: center;
    align-items: start;
    margin-top: 1em;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .contributors-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      justify-content: center;
    }
  }

  .contributor {
    text-align: center;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .contributor img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: block;
    object-fit: cover;
    align-self: center;
    margin: 0 auto;
    cursor: pointer;
  }

  .contributor p {
    display: block;
    margin-top: 0.5em;
    margin: 0.2em 0;
  }

  /* 
  .contributor p {
    margin: 0.2em 0;
  } */
</style>