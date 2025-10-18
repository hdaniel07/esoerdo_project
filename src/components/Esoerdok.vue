<script setup>

</script>


<template>
    <section>
        <div class="container mt-5" data-aos="fade-up" data-aos-duration="2000">
            <h2 class="mb-4 text-center">Az esőerdők változatos élővilága</h2>
            <p class="mb-5 text-center">
                Az esőerdők bolygónk leggazdagabb élőhelyei, ahol a Földön élő fajok több mint fele megtalálható.
                Ezek a buja, zöld világok hatalmas mennyiségű oxigént termelnek, szabályozzák a Föld éghajlatát, és
                számtalan növény- és állatfaj otthonai, melyek közül sok sehol máshol nem él.
                Az esőerdők nemcsak a természet, hanem az emberiség jövőjének is kulcsfontosságú részei.
            </p>
        </div>

        <div class="row justify-content-center text-center" data-aos="fade-up" data-aos-duration="2000">
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <a href="#amazonas">
                    <div class="card">
                        <img src="/src/assets/amazonas.jpg" alt="amazonia" title="Amazonas folyó"
                            class="img-fluid rounded-top shadow mb-3" />
                        <div class="szoveg">
                            <h3 class="h5">Amazóniai esőerdő</h3>
                            <p class="small">
                                A világ legnagyobb esőerdeje, több mint 5,5 millió km² területen. Több millió növény- és
                                állatfaj él itt,
                                köztük a jaguár, a lajhár és számos színes papagáj. Az Amazonas a Föld „tüdeje”.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <a href="#kongo">
                    <div class="card">
                        <img src="/src/assets/kongo.jpg" alt="kongo" title="Kongó-medence"
                            class="img-fluid rounded-top shadow mb-3" />
                        <div class="szoveg">
                            <h3 class="h5">Kongói esőerdő</h3>
                            <p class="small">
                                A második legnagyobb trópusi erdő, Afrika szívében. A gorillák, okapik és elefántok
                                otthona,
                                kulcsszereplő
                                a kontinens éghajlati egyensúlyának megőrzésében.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <a href="#azsia">
                    <div class="card">
                        <img src="/src/assets/borneo.jpg" alt="borneo" title="Borneói hegy"
                            class="img-fluid rounded-top shadow mb-3" />
                        <div class="szoveg">
                            <h3 class="h5">Délkelet-ázsiai esőerdők</h3>
                            <p class="small">
                                Egykor Ázsia nagy részét borították, ma főként Borneón és Szumátrán maradtak fenn. Az
                                orangután,
                                a maláj tigris és a borneói elefánt otthona.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <a href="#uj-guinea">
                    <div class="card">
                        <img src="/src/assets/uj-guinea.webp" alt="uj-guinea" title="Új-Guinea erdői"
                            class="img-fluid rounded-top shadow mb-3" />
                        <div class="szoveg">
                            <h3 class="h5">Új-guineai esőerdők</h3>
                            <p class="small">
                                Endemikus fajokban gazdag vidék. A paradicsommadarak, kazuárok és különleges rovarok
                                teszik
                                egyedivé.
                                A helyi törzsek számára évezredek óta életforrás.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <a href="#ausztralia">
                    <div class="card">
                        <img src="/src/assets/daintree.jpg" alt="ausztrália" title="Daintree esőerdő"
                            class="img-fluid rounded-top shadow mb-3" />
                        <div class="szoveg">
                            <h3 class="h5">Ausztrál esőerdők</h3>
                            <p class="small">
                                A világ egyik legrégebbi erdőrendszere, több mint 100 millió éves múlttal. A koalák,
                                fakúszó
                                kenguruk és
                                páfrányerdők különleges élővilágot alkotnak.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
h2,
h3,
h4 {
    font-family: "Noto Sans", sans-serif;
    color: #1a1a1a;
}

p {
    color: #4a4a4a;
    white-space: normal;
}

section {
    background-color: #fff;
    color: #000;
}

.row{
    margin: 0px;
}

.card {
    padding: 0px;
    min-height: 365px;
}

.card:hover {
    cursor: pointer;
}

.szoveg {
    margin: 0px 5px;
    padding: 10px;
}

a {
    margin: 0px;
    text-decoration: none;
}

@media (max-width: 768px) {
  .col-12{
    margin: 20px 10px;
  }
}
</style>
