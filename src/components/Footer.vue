<script setup>

</script>

<template>
  <div class="footer">
    <p>Beers4Me© was made using PunkApi as the data provider <br> Web page created by: Iyán Pérez</p>
    <div class="btn-group">
      <button>
        <a href="https://github.com/IyanPerez" target="_blank">
          GitHub
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/iyanperez/" target="_blank">
          Linkedin
        </a>
      </button>
    </div>
  </div>
</template>
  
<style lang="scss" scoped>
@import "../assets/scss/Reset.scss";

.footer {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 2.5rem;

  p {
    font-weight: bold;
    font-family: 'Voltaire', cursive;
  }

  .btn-group {
    display: flex;

    button {
      background-color: antiquewhite;
      color: #000000;
      border: solid 0.03rem;
      padding: 0.5rem 0.5rem;
      border-radius: 0.7rem;
      text-decoration: none;
      margin-left: 1rem;
      cursor: pointer;
      font-family: 'Voltaire', cursive;

      &:hover {
        background-color: burlywood;
        color: black;
        transition: 0.5s;
      }
    }
  }
}
</style>