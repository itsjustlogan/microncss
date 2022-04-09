<div class="wrapper">

<h1 id="title">{{ greeting }}</h1>

<div class="button-wrapper">
<a href="./get-started" class="get-started">
Get Started</a>
<a href="https://github.com/itsjustlogan/microncss"  target="_blank" class="github">
Github</a>
</div>

</div>

<script setup>

  const greeting = 'MicronCSS the mini CSS utility for rapidly building sites that look great!'
</script>

<style>

#title {
  text-align: center;
}

.wrapper {
  margin-top: 15em;
}

.button-wrapper {
  padding-block: 3em;
  display: flex;
}

.get-started {
  color: white;
  background-color: #fdc71a;
  padding-block: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 5px;
  margin: auto;
}

.github {
  padding-block: 0.5em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border: solid #fdc71a 2px;
  border-radius: 5px;
  margin: auto;
}

</style>
