<script setup>
const animals = [
    { rainforest: "amazon", name: "Jaguár", img: "/src/assets/jaguar.jpg", alt: "jaguar", title: "jaguár", description: "A jaguár Dél-Amerika legnagyobb nagymacskája, az esőerdők csúcsragadozója.", details: { lifespan: "12–15 év", size: "100–180 cm, súlya akár 100 kg", diet: "halak, majmok, kisebb emlősök", fact: "harapása az egyik legerősebb az állatvilágban." } },
    { rainforest: "amazon", name: "Lajhár", img: "/src/assets/lajhar.jpg", alt: "lajhar", title: "lajhár", description: "A lajhár lassú mozgásáról ismert, ideje nagy részét fejjel lefelé tölti.", details: { lifespan: "20–30 év", size: "60–80 cm, 4–8 kg", diet: "levelek, gyümölcsök, rügyek", fact: "bundáján algák nőnek, így beleolvad a környezetbe." } },
    { rainforest: "amazon", name: "Ara papagáj", img: "/src/assets/ara.jpg", alt: "ara papagáj", title: "ara papagáj", description: "Az ara papagáj élénk színeiről és hangutánzó képességéről híres.", details: { lifespan: "40–60 év", size: "80–95 cm", diet: "gyümölcsök, magvak, diófélék", fact: "képes emberi hangokat utánozni, több tucat szót is megjegyez." } },
    { rainforest: "amazon", name: "Pókmajom", img: "/src/assets/pokmajom.jpg", alt: "pókmajom", title: "pókmajom", description: "A pókmajom hosszú végtagjaival és farkával ügyesen közlekedik a fákon.", details: { lifespan: "20–27 év", size: "testhossz 40–60 cm, farok 90 cm", diet: "gyümölcsök, levelek, rovarok", fact: "30 egyedből álló csoportokban él és hangokkal kommunikál." } },
    { rainforest: "congo", name: "Gorilla", img: "/src/assets/gorilla.jpg", alt: "gorilla", title: "gorilla", description: "A gorilla a legnagyobb ma élő főemlős, amely Afrika esőerdeiben él, békés és társas lény.", details: { lifespan: "35–40 év", size: "140–180 cm, súlya 140–200 kg", diet: "levelek, gyümölcsök, hajtások", fact: "A gorillák DNS-e több mint 98%-ban megegyezik az emberével." } },
    { rainforest: "congo", name: "Okapi", img: "/src/assets/okapi.jpg", alt: "okapi", title: "okapi", description: "Az okapi a zsiráf közeli rokona, csíkos lábaival a zebrára emlékeztet, és csak a kongói esőerdőkben él.", details: { lifespan: "20–30 év", size: "200–250 cm, súlya 200–350 kg", diet: "levelek, gallyak, gyümölcsök", fact: "Az okapit csak a 20. század elején fedezte fel a tudomány a vadonban." } },
    { rainforest: "congo", name: "Tukán", img: "/src/assets/tukan.jpg", alt: "toucan", title: "tukán", description: "A tukán élénk színű, hatalmas csőrű madár, amely Afrika trópusi esőerdeiben, köztük a Kongó-medencében is megtalálható.", details: { lifespan: "15–20 év", size: "40–60 cm", diet: "gyümölcsök, rovarok, kisebb állatok", fact: "Óriási csőre könnyű, mivel üreges, és segít a hőszabályozásban." } },
    { rainforest: "congo", name: "Krokodil", img: "/src/assets/krokodil.jpg", alt: "crocodile", title: "krokodil", description: "A kongói krokodil (vagy keskenyorrú krokodil) az afrikai esőerdők folyóiban élő ősi hüllő, félelmetes ragadozó és kiváló úszó.", details: { lifespan: "70–100 év", size: "2–4 m, súlya akár 500 kg", diet: "halak, madarak, kisebb emlősök", fact: "A kongói krokodil ritkán támad emberre, és sokáig összekeverték más afrikai krokodilfajokkal." } },
    { rainforest: "azsia", name: "Orángután", img: "/src/assets/orangutan.jpg", alt: "orangutan", title: "orángután", description: "Az orángután a legnagyobb fán élő főemlős, Délkelet-Ázsia esőerdeiben, különösen Szumátra és Borneó szigetén él.", details: { lifespan: "30–45 év", size: "120–150 cm, súlya 50–100 kg", diet: "gyümölcsök, levelek, rovarok", fact: "Az orángutánok rendkívül intelligensek, képesek eszközöket használni és összetett problémákat megoldani." } },
    { rainforest: "azsia", name: "Maláj tigris", img: "/src/assets/malaj-tigris.jpg", alt: "malayan tiger", title: "maláj tigris", description: "A maláj tigris Délkelet-Ázsia esőerdeiben él, kisebb termetű, de rendkívül fürge és erős nagymacska.", details: { lifespan: "10–15 év", size: "220–250 cm, súlya 100–140 kg", diet: "szarvasok, vaddisznók, kisebb emlősök", fact: "A maláj tigris kritikus állapotban van a vadonban, főként élőhelyvesztés miatt." } },
    { rainforest: "azsia", name: "Borneói elefánt", img: "/src/assets/borneoi-elefant.jpg", alt: "bornean elephant", title: "borneói elefánt", description: "A borneói elefánt a legkisebb ázsiai elefántfaj, amely Borneó szigetének esőerdeiben él, rendkívül békés és területvédő.", details: { lifespan: "60–70 év", size: "2–3 m, súlya 2–5 tonna", diet: "levelek, gyümölcsök, kéreg", fact: "A borneói elefántok fontos szerepet játszanak az erdő ökoszisztémájában, mivel magvakat terjesztenek." } },
    { rainforest: "azsia", name: "Tapír", img: "/src/assets/tapir.jpg", alt: "tapir", title: "tapír", description: "A maláj tapír nagytestű, lomha növényevő, amely a délkelet-ázsiai esőerdők padlóján él, főként éjszaka aktív.", details: { lifespan: "25–30 év", size: "180–250 cm, súlya 250–320 kg", diet: "levelek, gyümölcsök, hajtások", fact: "A tapírok kitűnő úszók, és gyakran keresztezik folyókat az erdőben." } },
    { rainforest: "uj-guinea", name: "Kazuár", img: "/src/assets/kazuar.jpg", alt: "cassowary", title: "kazuár", description: "A kazuár egy nagytestű, repülésképtelen madár, Új-Guinea trópusi esőerdeiben él, híres félelmetes láb- és karmerejéről.", details: { lifespan: "30–40 év", size: "150–190 cm, súlya 30–60 kg", diet: "gyümölcsök, rovarok, kisebb állatok", fact: "A kazuár nagyon gyors futó és jól úszik, a világ egyik legveszélyesebb madara." } },
    { rainforest: "uj-guinea", name: "Paradicsommadár", img: "/src/assets/paradicsommadar.jpg", alt: "bird of paradise", title: "paradicsommadár", description: "A paradicsommadár híres élénk színű tollazatáról és bonyolult párzási táncairól, Új-Guinea esőerdeiben él.", details: { lifespan: "5–15 év", size: "15–45 cm, súlya 50–400 g fajonként változik", diet: "gyümölcsök, rovarok", fact: "A hímek látványos tollazata és tánca a párválasztás fő eszköze." } },
    { rainforest: "uj-guinea", name: "Kékgyík", img: "/src/assets/kek-gyik.jpg", alt: "blue tongue lizard", title: "kékgyík", description: "Közepes termetű gyík Új-Guinea esőerdeiben, jellegzetes kék nyelvével.", details: { lifespan: "15–20 év", size: "40–60 cm", diet: "növények, rovarok", fact: "Nyelve figyelmeztetés a ragadozóknak." } },
    { rainforest: "uj-guinea", name: "Fakúszó kenguru", img: "/src/assets/kenguru.jpg", alt: "tree kangaroo", title: "fakuszo kenguru", description: "A fakúszó kenguru egy különleges erszényes, amely Új-Guinea hegyvidéki erdeiben él. Nevét onnan kapta, hogy a legtöbb kenguruval ellentétben nem a földön, hanem fákon mozog ügyesen: karmai segítségével kapaszkodik és ugrál ágak között.", details: { lifespan: "15–20 év", size: "50–80 cm, súlya 7–14 kg", diet: "levelek, gyümölcsök", fact: "Főleg éjszaka aktív." } },
    { rainforest: "ausztralia", name: "Kacsacsőrű emlős", img: "/src/assets/kacsacsoru.png", alt: "platypus", title: "kacsacsőrű emlős", description: "Egyedülálló emlős Ausztrália esőerdei és folyói közelében, tojással szaporodik.", details: { lifespan: "10–17 év", size: "40–60 cm, súlya 1–2,5 kg", diet: "rovarok, vízi állatok", fact: "Mérgező spórája van a hímeknek." } },
    { rainforest: "ausztralia", name: "Kokabura", img: "/src/assets/kokabura.jpg", alt: "kookaburra", title: "kookaburra", description: "Nevető madár, amely Ausztrália esőerdeiben él, híres jellegzetes hangjáról.", details: { lifespan: "15–20 év", size: "40–45 cm", diet: "rovarok, kis állatok", fact: "Nevét jellegzetes nevető hangjáról kapta." } },
    { rainforest: "ausztralia", name: "Koala", img: "/src/assets/koala.jpg", alt: "koala", title: "koala", description: "Klasszikus ausztráliai erszényes, eukaliptusz levelekkel táplálkozik.", details: { lifespan: "13–18 év", size: "60–85 cm, súlya 4–15 kg", diet: "eukaliptusz levelek", fact: "Nagyrészt fán tölti az idejét." } },
];
</script>


<template>
    <section class="py-5">
        <div class="container">
            <div id="amazonas">
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Amazonas legjellegzetesebb
                    állatai</h3>

                <div v-for="(animal, index) in animals" :key="animal.name">
                    <div v-if="animal.rainforest == 'amazon'" class="row align-items-center mb-5"
                        :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }" data-aos="fade-up" data-aos-duration="2000">
                        <div class="col-12 col-lg-6">
                            <h4>{{ animal.name }}</h4>
                            <p>{{ animal.description }}</p>
                            <ul class="list-unstyled">
                                <li><strong>Élettartam:</strong> {{ animal.details.lifespan }}</li>
                                <li><strong>Méret:</strong> {{ animal.details.size }}</li>
                                <li><strong>Táplálkozás:</strong> {{ animal.details.diet }}</li>
                                <li><strong>Érdekesség:</strong> {{ animal.details.fact }}</li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-6 d-flex justify-content-center">
                            <img :src="animal.img" :alt="animal.alt" :title="animal.title"
                                class="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="kongo">
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Kongói esőerdő
                    legjellegzetesebb állatai</h3>

                <div v-for="(animal, index) in animals" :key="animal.name">
                    <div v-if="animal.rainforest == 'congo'" class="row align-items-center mb-5"
                        :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }" data-aos="fade-up" data-aos-duration="2000">
                        <div class="col-12 col-lg-6">
                            <h4>{{ animal.name }}</h4>
                            <p>{{ animal.description }}</p>
                            <ul class="list-unstyled">
                                <li><strong>Élettartam:</strong> {{ animal.details.lifespan }}</li>
                                <li><strong>Méret:</strong> {{ animal.details.size }}</li>
                                <li><strong>Táplálkozás:</strong> {{ animal.details.diet }}</li>
                                <li><strong>Érdekesség:</strong> {{ animal.details.fact }}</li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-6 d-flex justify-content-center">
                            <img :src="animal.img" :alt="animal.alt" :title="animal.title"
                                class="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="azsia">
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Délkelet-ázsiai esőerdők
                    legjellegzetesebb
                    állatai</h3>

                <div v-for="(animal, index) in animals" :key="animal.name">
                    <div v-if="animal.rainforest == 'azsia'" class="row align-items-center mb-5"
                        :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }" data-aos="fade-up" data-aos-duration="2000">
                        <div class="col-12 col-lg-6">
                            <h4>{{ animal.name }}</h4>
                            <p>{{ animal.description }}</p>
                            <ul class="list-unstyled">
                                <li><strong>Élettartam:</strong> {{ animal.details.lifespan }}</li>
                                <li><strong>Méret:</strong> {{ animal.details.size }}</li>
                                <li><strong>Táplálkozás:</strong> {{ animal.details.diet }}</li>
                                <li><strong>Érdekesség:</strong> {{ animal.details.fact }}</li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-6 d-flex justify-content-center">
                            <img :src="animal.img" :alt="animal.alt" :title="animal.title"
                                class="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="uj-guinea">
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Új-guineai esőerdők
                    legjellegzetesebb
                    állatai</h3>

                <div v-for="(animal, index) in animals" :key="animal.name">
                    <div v-if="animal.rainforest == 'uj-guinea'" class="row align-items-center mb-5"
                        :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }" data-aos="fade-up" data-aos-duration="2000">
                        <div class="col-12 col-lg-6">
                            <h4>{{ animal.name }}</h4>
                            <p>{{ animal.description }}</p>
                            <ul class="list-unstyled">
                                <li><strong>Élettartam:</strong> {{ animal.details.lifespan }}</li>
                                <li><strong>Méret:</strong> {{ animal.details.size }}</li>
                                <li><strong>Táplálkozás:</strong> {{ animal.details.diet }}</li>
                                <li><strong>Érdekesség:</strong> {{ animal.details.fact }}</li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-6 d-flex justify-content-center">
                            <img :src="animal.img" :alt="animal.alt" :title="animal.title"
                                class="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
                <div id="ausztralia">
                    <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Ausztrál esőerdők
                        legjellegzetesebb
                        állatai</h3>

                    <div v-for="(animal, index) in animals" :key="animal.name">
                        <div v-if="animal.rainforest == 'ausztralia'" class="row align-items-center mb-5"
                            :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }" data-aos="fade-up"
                            data-aos-duration="2000">
                            <div class="col-12 col-lg-6">
                                <h4>{{ animal.name }}</h4>
                                <p>{{ animal.description }}</p>
                                <ul class="list-unstyled">
                                    <li><strong>Élettartam:</strong> {{ animal.details.lifespan }}</li>
                                    <li><strong>Méret:</strong> {{ animal.details.size }}</li>
                                    <li><strong>Táplálkozás:</strong> {{ animal.details.diet }}</li>
                                    <li><strong>Érdekesség:</strong> {{ animal.details.fact }}</li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-6 d-flex justify-content-center">
                                <img :src="animal.img" :alt="animal.alt" :title="animal.title"
                                    class="img-fluid rounded shadow" />
                            </div>
                        </div>
                    </div>
                </div>
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

.img-fluid {
    width: 100%; 
    max-width: 600px;  
    height: 300px; 
    object-fit: cover;
}
</style>
