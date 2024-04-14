<script setup lang="ts">
import profile from './../assets/json/profileJa.json';
</script>

<template>
  <br />
  <h1>Profile</h1>
  <h3>{{ profile.users[0].name }}</h3>
  <p>{{ profile.users[0].introduction }}</p>
  <br />

  <h1>Career</h1>
  <div v-for="career in profile.careers">
    <p>{{ career.term }}</p>
    <a href="{career.hp}" target="_blank" rel="noopener">
      {{ career.company }}
    </a><br />
    {{ career.role }}
    <br />
    <h5>
      {{ career.detail }}
    </h5>
    <br />
  </div>

  <h1>Education</h1>
  <div v-for="education in profile.education">
    <p>{{ education.term }}</p>
    {{ education.university }}<br />
    <h5>
      {{ education.role }}
    </h5>
    <br />
  </div>

  <h1>Internship</h1>
  <div v-for="internship in profile.internship">
    <p>{{ internship.term }}</p>
    <a href="{internship.hp}" target="_blank" rel="noopener">
      {{ internship.company }}
    </a><br />
    {{ internship.role }}
    <br />
    <h5>
      {{ internship.detail }}
    </h5>
    <br />
  </div>

  <h1>Certification</h1>
  <li v-for="certification in profile.certification">
      {{ certification.title }} ({{ certification.date }})
  </li>
  <br />

  <h1>Portfolio</h1>
  <h3>農業向けSNSアプリ</h3>
  <p>
    -Ios版は
    <a href="https://x.gd/IisSK" target="_blank" rel="noopener">こちら</a><br />
    -Android版は
    <a href="https://play.google.com/store/apps/details?id=io.ionic.starter.village" target="_blank" rel="noopener">こちら</a><br />
    ※開発ツールは、Vue・Ionic・Firebase・Stripe等を使用
  </p>
  <br />

  <h1>Contact</h1>
  <p>
    ・<a href="https://www.linkedin.com/in/daichi-koga-84347721b/" target="_blank" rel="noopener">Linkedin</a><br />
  </p>
  <br />
</template>