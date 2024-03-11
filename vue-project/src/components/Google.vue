<script setup lang="ts">
</script>

<template>
    <div class="container">
      <div class="header"> <!-- Header -->
          <div>
              <a href="https://about.google/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header" target="_blank">Über Google</a>
              <a href="https://store.google.com/DE/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=de&pli=1" target="_blank">Store</a>
          </div>
          <div>
              <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" target="_blank">Gmail</a>
              <a href="https://www.google.com/imghp?hl=de&authuser=0&ogbl" target="_blank">Bilder</a>
              <a href="https://about.google/products/#all-products" target="_blank">⋮⋮⋮</a>
              <a href="https://myaccount.google.com/" target="_blank">Login</a>
          </div>
      </div>
      <div class="main"> <!-- Main -->
          <div class="item">
              <img src="../assets/glogo.png" class="gimg">
          </div>
          <div class="item">
              <form action="https://google.com/search" method="GET"> 
                  <div class="searchbar">
                      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#878c91" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                      <input type="text" name="q"  class="searchbar-input" required autocomplete="off">
                      <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path>
                          <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                          <path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path>
                          <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path>
                      </svg>
                      <svg focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                          <rect fill="none" height="192" width="192"></rect>
                          <g>
                              <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                              <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                              <path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path>
                              <path fill="#fbbc04" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path>
                              <path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path>
                          </g>
                      </svg>
                  </div>
                  <div>
                      <button type="submit">Google Suche</button>
                      <a href="https://www.google.com/search?q=kitten"><button type="button">Auf gut Glück!</button></a>
                  </div>
              </form>
          </div>
      </div>
      <div class="bottom"> <!-- Footer -->
          <div class="item" style="align-content: flex-start;">
              <a href="https://ads.google.com/intl/de_de/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" target="_blank">Werbeprogramme</a>
              <a href="https://smallbusiness.withgoogle.com/intl/de_de/?subid=de-de-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=de-de-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/" target="_blank">Unternehmen</a>
              <a href="https://www.google.com/search/howsearchworks/?fg=1" target="_blank">Wie funktioniert die Google Suche?</a>
          </div>
          <div class="item">
              <a href="https://sustainability.google/intl/de/klimaschutz/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=" target="_blank">Drei Jahrzehnte Klimaschutz: Jede Entscheidung zählt </a>
          </div>
          <div class="item" style="align-content: flex-end;">
              <a href="https://policies.google.com/privacy?hl=de&fg=1" target="_blank">Datenschutzerklärung</a>
              <a href="https://policies.google.com/terms?hl=de&fg=1" target="_blank">Nutzungsbedingungen</a>
              <a href="googleindex.html">Zurück</a>
          </div>
      </div>
  </div>
</template>

<style scoped>
body {
  background-color: #202124;
  font-family: 'arial', sans-serif;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  min-height: 500px;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  width: 100%;
}

.item{
  align-items: center;
  text-align: center;
  margin: 0.5svh;
}

.header a {
  color:#bdc1c5;
  text-decoration: none;
  margin: 0 10px;
}

.main {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.gimg {
  max-width: 50svh;
  min-width: 20svh;
  height: auto;
}

form{
  margin-bottom: 10svh;
}

.bottom {
  width: 100%;
  background-color: #171717;
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-between;
  left: 0;
  bottom: 0;
  min-height: 2svh;
  padding-block: 3svh;
}

.bottom a {
  color:#d8d9dc;
  text-decoration: none;
  font-size: 13px;
  margin: 0 10px;
  padding-inline: 1svh;
}

.bottom a:hover{
  text-decoration: underline;
}

button {
  background-color: #303134;
  padding-inline: 15px;
  padding-block: 10px;
  color: #e6e8ea;
  text-decoration: none;
  border: 1px solid transparent;
  margin-top: 25px;
  margin-inline: 3px;
  border-radius: 3px;
}

button:hover{
  cursor: pointer;
  border: 1px #5e636e solid;
}

.search{

}

svg{
  width: 30px;
}

.searchbar{
  display: flex;
  gap: 1rem;
  border: 1px #5e636e solid;
  background-color: #202124;
  border-radius: 40px;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  padding-block: 15px;
  margin-top: 20px;
  color: white;
  width: 100%;
}

.searchbar-input{
  width: 100%;
}

input {
  all: unset;
  width: 100%;
}

input:hover {
  background-color: #303134 ;
  border-color: #303134;
}

input:focus-visible{
  outline: none;
}

/* PHONE */
@media only screen and (max-width: 720px) {
      .searchbar-input{
          width: 80vw;
          padding-inline-start: 1vw;
          padding-inline-end: 5vw;
      }

      .searchbar #search {
          position: relative;
          left: 40px;
          top: 2px;
      }

      .searchbar #microphone, #camera {
          position: relative;
          top: -37px;
          left: 130px;
      }

      .bottom a, .bottom{
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: smaller;
          width: 100vw;
          margin: 0;
          margin-block: 2px;
      }
      .container{
          width: 100vw;
          min-height: 100vw;
      }
      .header a, .header{
          font-size: smaller;
          padding: 1px;
          margin: 10px;
          justify-content: center;
      }
      .gimg{
          width: 50vw;
      }
      .main{
          width: 100vw;
          padding: 0;
          padding-top: 40vw;
      }
}
</style>
