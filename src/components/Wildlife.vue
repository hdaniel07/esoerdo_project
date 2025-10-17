<script setup>
const animals = [
    { rainforest: "amazon", name: "Jaguár", img: "/src/assets/jaguar.jpg", alt: "jaguar", title: "jaguár", description: "A jaguár Dél-Amerika legnagyobb nagymacskája, az esőerdők csúcsragadozója.", details: { lifespan: "12–15 év", size: "100–180 cm, súlya akár 100 kg", diet: "halak, majmok, kisebb emlősök", fact: "harapása az egyik legerősebb az állatvilágban." } },
    { rainforest: "amazon", name: "Lajhár", img: "/src/assets/lajhar.jpg", alt: "lajhar", title: "lajhár", description: "A lajhár lassú mozgásáról ismert, ideje nagy részét fejjel lefelé tölti.", details: { lifespan: "20–30 év", size: "60–80 cm, 4–8 kg", diet: "levelek, gyümölcsök, rügyek", fact: "bundáján algák nőnek, így beleolvad a környezetbe." } },
    { rainforest: "amazon", name: "Ara papagáj", img: "/src/assets/ara.jpg", alt: "ara papagáj", title: "ara papagáj", description: "Az ara papagáj élénk színeiről és hangutánzó képességéről híres.", details: { lifespan: "40–60 év", size: "80–95 cm", diet: "gyümölcsök, magvak, diófélék", fact: "képes emberi hangokat utánozni, több tucat szót is megjegyez." } },
    { rainforest: "amazon", name: "Pókmajom", img: "/src/assets/pokmajom.jpg", alt: "pókmajom", title: "pókmajom", description: "A pókmajom hosszú végtagjaival és farkával ügyesen közlekedik a fákon.", details: { lifespan: "20–27 év", size: "testhossz 40–60 cm, farok 90 cm", diet: "gyümölcsök, levelek, rovarok", fact: "30 egyedből álló csoportokban él és hangokkal kommunikál." } }
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
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Kongói esőerdő legjellegzetesebb állatai</h3>

                <div v-for="(animal, index) in animals" :key="animal.name">
                    <div v-if="animal.rainforest == 'kongo'" class="row align-items-center mb-5"
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
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Délkelet-ázsiai esőerdők legjellegzetesebb
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
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Új-guineai esőerdők legjellegzetesebb
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
                <h3 class="text-center mb-5" data-aos="fade-up" data-aos-duration="2000">Ausztrál esőerdők legjellegzetesebb
                    állatai</h3>

                <div v-for="(animal, index) in animals" :key="animal.name">
                    <div v-if="animal.rainforest == 'ausztralia'" class="row align-items-center mb-5"
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
</style>
