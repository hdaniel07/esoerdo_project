<template>
    <div class="quiz-wrapper">
        <div v-if="finished" class="quiz-card">
            <h2>Eredmény</h2>
            <p>{{ score }} / {{ GAME_LENGTH }} helyes válasz</p>
            <button class="btn" @click="restart">Új játék</button>
        </div>

        <div v-else class="quiz-card" :key="`q-${currentIndex}`">
            <h3>{{ currentIndex + 1 }} / {{ GAME_LENGTH }}</h3>
            <p class="question">{{ currentQuestion.text }}</p>

            <div class="answers">
                <button v-for="(choice, i) in currentQuestion.choices" :key="`q${currentIndex}-a${i}`" class="answer"
                    :class="{
                        correct: locked && i === currentQuestion.correctIndex,
                        wrong: locked && selected === i && i !== currentQuestion.correctIndex
                    }" @click="selectAnswer(i)" :disabled="locked">
                    {{ choice }}
                </button>
            </div>

            <button v-if="locked && currentIndex < GAME_LENGTH - 1" class="btn" @click="nextQuestion">
                Következő
            </button>

            <button v-else-if="locked && currentIndex === GAME_LENGTH - 1" class="btn" @click="finishGame">
                Eredmény megtekintése
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const GAME_LENGTH = 10


const allQuestions = [
    { text: 'Melyik kontinensen található a legnagyobb esőerdő?', choices: ['Afrika', 'Dél-Amerika', 'Ázsia', 'Ausztrália'], correctIndex: 1 },
    { text: 'Az esőerdők a Föld területének hány százalékát borítják ma?', choices: ['3%', '6%', '12%', '20%'], correctIndex: 1 },
    { text: 'Melyik állat nem él esőerdőben?', choices: ['Papagáj', 'Jaguar', 'Pingvin', 'Orángután'], correctIndex: 2 },
    { text: 'Mi a fő oka az esőerdők pusztulásának?', choices: ['Erdőirtás', 'Túlzott esőzés', 'Földrengések', 'Túl sok állat'], correctIndex: 0 },
    { text: 'Milyen éghajlat jellemző az esőerdőkre?', choices: ['Száraz és meleg', 'Hűvös és csapadékos', 'Meleg és csapadékos', 'Szeles és hideg'], correctIndex: 2 },
    { text: 'Miért nevezik az esőerdőket a „Föld tüdejének”?', choices: ['Sok oxigént termelnek', 'Sok levegőt tartalmaznak', 'Nagyon magasak a fák', 'Sok vizet párologtatnak'], correctIndex: 0 },
    { text: 'Melyik folyamat hűti a légkört az esőerdőkben?', choices: ['Fotoszintézis', 'Transzspiráció', 'Oxidáció', 'Kondenzáció'], correctIndex: 1 },
    { text: 'Milyen szinten élnek a legtöbb fényt igénylő növények az esőerdőben?', choices: ['A talajszinten', 'A lombkoronaszinten', 'A vízben', 'A hegyoldalakon'], correctIndex: 1 },
    { text: 'Milyen vastag általában az esőerdők talaja?', choices: ['Nagyon vastag és termékeny', 'Vékony és tápanyagszegény', 'Kavicsos', 'Homokos'], correctIndex: 1 },
    { text: 'Melyik országban található a Kongó-medence esőerdeje?', choices: ['Brazília', 'Indonézia', 'Kongói Demokratikus Köztársaság', 'Peru'], correctIndex: 2 },
    { text: 'Melyik óceán mentén helyezkedik el az Amazonas-esőerdő?', choices: ['Atlanti-óceán', 'Csendes-óceán', 'Indiai-óceán', 'Jeges-tenger'], correctIndex: 0 },
    { text: 'Melyik növény jellemző az esőerdőkre?', choices: ['Kaktusz', 'Banánfa', 'Fenyőfa', 'Levendula'], correctIndex: 1 },
    { text: 'Mi jellemző az esőerdők biodiverzitására?', choices: ['Nagyon alacsony', 'Közepes', 'Nagyon magas', 'Változó évszakonként'], correctIndex: 2 },
    { text: 'Melyik állat híres arról, hogy lassan mozog és esőerdőben él?', choices: ['Lajhár', 'Oroszlán', 'Zebra', 'Szarvas'], correctIndex: 0 },
    { text: 'Melyik esőerdő található Ázsiában?', choices: ['Amazonas', 'Kongó', 'Borneó', 'Andok'], correctIndex: 2 },
    { text: 'Mit jelent a „trópusi esőerdő” kifejezés?', choices: ['Meleg és sok esővel járó éghajlatú erdő', 'Hideg és havas erdő', 'Sivatagi növényzet', 'Magashegyi fenyves'], correctIndex: 0 },
    { text: 'Milyen hatással van az esőerdők pusztulása a klímára?', choices: ['Csökkenti az üvegházhatást', 'Növeli a légkör szén-dioxid-tartalmát', 'Semmilyen hatása nincs', 'Több oxigén termelődik'], correctIndex: 1 },
    { text: 'Milyen típusú fák dominálnak az esőerdőkben?', choices: ['Lombhullató fák', 'Örökzöld fák', 'Tűlevelűek', 'Cserjék'], correctIndex: 1 },
    { text: 'Melyik folyó szeli át az Amazonas-esőerdőt?', choices: ['Nílus', 'Mississippi', 'Amazonas', 'Duna'], correctIndex: 2 },
    { text: 'Melyik növény nő gyakran a fák törzsén és ágain?', choices: ['Moha', 'Kaktusz', 'Orchidea', 'Bambusz'], correctIndex: 2 },
    { text: 'Milyen magasra nőhetnek az esőerdők fái?', choices: ['10–20 méter', '20–30 méter', '40–60 méter', '100 méter felett'], correctIndex: 2 },
    { text: 'Melyik kontinensen található a Borneói esőerdő?', choices: ['Afrika', 'Dél-Amerika', 'Ázsia', 'Ausztrália'], correctIndex: 2 },
    { text: 'Mi az epifita növény?', choices: ['A talajban élő növény', 'Más növényen élő növény', 'Vízinövény', 'Sivatagi növény'], correctIndex: 1 },
    { text: 'Melyik országban található a Daintree-esőerdő?', choices: ['Ausztrália', 'Brazília', 'Kongó', 'Indonézia'], correctIndex: 0 },
    { text: 'Melyik évszakban esik a legtöbb eső a trópusokon?', choices: ['Tél', 'Nyár', 'Egész évben', 'Csak tavasszal'], correctIndex: 2 },
    { text: 'Milyen állat él a fák tetején és repüléshez hasonlóan siklik?', choices: ['Repülő mókus', 'Kolibri', 'Lajhár', 'Orángután'], correctIndex: 0 },
    { text: 'Melyik esőerdő található Közép-Amerikában?', choices: ['Costa Rica-i esőerdő', 'Kongó', 'Borneó', 'Andok'], correctIndex: 0 },
    { text: 'Mit jelent az „ökoszisztéma” szó?', choices: ['A növények rendszertani csoportja', 'Az élőlények és környezetük kapcsolatrendszere', 'Egy növényfaj gyűjtőneve', 'Csillagászati fogalom'], correctIndex: 1 },
    { text: 'Mi történik, ha kivágják az esőerdő fáit?', choices: ['A talaj erodálódik', 'A levegő oxigéntartalma nő', 'A klíma hűvösebb lesz', 'Semmi nem történik'], correctIndex: 0 },
    { text: 'Melyik madár híres színes tollazatáról az esőerdőben?', choices: ['Papagáj', 'Varjú', 'Veréb', 'Galamb'], correctIndex: 0 },
    { text: 'Melyik növény adja a kakaóbabot?', choices: ['Kakaófa', 'Kávécserje', 'Teafa', 'Banánfa'], correctIndex: 0 },
    { text: 'Hogyan segít az esőerdő a víz körforgásában?', choices: ['Megállítja az esőt', 'Elpárologtatja a vizet a levelein', 'Tisztítja a folyókat', 'Visszatartja a szelet'], correctIndex: 1 },
    { text: 'Milyen állat adja ki a hangos „Howl” hangot az esőerdőben?', choices: ['Howler majom', 'Papagáj', 'Jaguar', 'Tigris'], correctIndex: 0 },
    { text: 'Mi az Amazonas-medence legnagyobb veszélye?', choices: ['Áradások', 'Erdőirtás', 'Tűzvész', 'Viharok'], correctIndex: 1 },
    { text: 'Melyik eszközt használják az erdőirtáshoz?', choices: ['Láncfűrész', 'Távcső', 'Teleszkóp', 'Ecset'], correctIndex: 0 },
    { text: 'Miért fontos az esőerdő a globális oxigéntermelésben?', choices: ['Sok oxigént termel fotoszintézis közben', 'Megköti a metánt', 'Vízgőzt bocsát ki', 'Közvetlenül hűti a levegőt'], correctIndex: 0 },
    { text: 'Melyik állat ismert az esőerdő fáinak tetején való ugrálásáról?', choices: ['Makákó', 'Kenguru', 'Lajhár', 'Mókusmajom'], correctIndex: 3 },
    { text: 'Mit nevezünk lombkoronaszintnek?', choices: ['A fa gyökérzónáját', 'A fák leveleinek felső részét', 'A talajszintet', 'A cserjeszintet'], correctIndex: 1 },
    { text: 'Melyik esőerdő található Afrikában?', choices: ['Kongó-medence', 'Amazonas', 'Borneó', 'Andok'], correctIndex: 0 },
    { text: 'Milyen hatása van a szén-dioxidnak az éghajlatra?', choices: ['Hűti a Földet', 'Üvegházhatást okoz', 'Semleges gáz', 'Fényelnyelő'], correctIndex: 1 },
    { text: 'Mi a fotoszintézis egyik mellékterméke?', choices: ['Víz', 'Oxigén', 'Szén-dioxid', 'Hidrogén'], correctIndex: 1 },
    { text: 'Melyik országban található a legnagyobb rész az Amazonas-esőerdőből?', choices: ['Peru', 'Brazília', 'Kolumbia', 'Venezuela'], correctIndex: 1 },
    { text: 'Mi a mangrove erdők különlegessége?', choices: ['Tengerparti, sós vízben nőnek', 'Hegyi erdők', 'Sivatagi növényzet', 'Fenyőerdők'], correctIndex: 0 },
    { text: 'Mit nevezünk endemikus fajnak?', choices: ['Világszerte elterjedt fajt', 'Csak egy adott területen élő fajt', 'Kihalt fajt', 'Migráló fajt'], correctIndex: 1 },
    { text: 'Melyik szint a legalsó az esőerdő rétegei közül?', choices: ['Talajszint', 'Lombkoronaszint', 'Középszint', 'Emergens szint'], correctIndex: 0 },
    { text: 'Melyik éghajlati övben találhatók a trópusi esőerdők?', choices: ['Mérsékelt övben', 'Trópusi övben', 'Sarkvidéki övben', 'Szubtrópusi övben'], correctIndex: 1 }
]



const currentIndex = ref(0)
const selected = ref(null)
const locked = ref(false)
const score = ref(0)
const finished = ref(false)
const questions = ref([])

function pickRandom(arr, n) {
    const a = arr.slice()
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a.slice(0, n)
}

onMounted(() => {
    questions.value = pickRandom(allQuestions, GAME_LENGTH)
})
const currentQuestion = computed(
    () => questions.value[currentIndex.value] || { text: '', choices: [], correctIndex: -1 }
)


function selectAnswer(i) {
    if (locked.value) return
    selected.value = i
    locked.value = true
    if (i === currentQuestion.value.correctIndex) {
        score.value++
    }
}

function nextQuestion() {
    currentIndex.value++
    selected.value = null
    locked.value = false
}

function finishGame() {
    finished.value = true
}

function restart() {
    score.value = 0
    finished.value = false
    currentIndex.value = 0
    selected.value = null
    locked.value = false
    questions.value = pickRandom(allQuestions, GAME_LENGTH)
}
</script>

<style scoped>
.quiz-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    margin-top: 100px;
}

.quiz-card {
    width: 100%;
    max-width: 500px;
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.question {
    font-weight: 600;
    margin: 1rem 0;
}

.answers {
    display: grid;
    gap: 0.75rem;
    margin: 1rem 0 1.5rem;
}

.answer {
    background: #f5f5f5;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.answer:hover {
    background: #e8f5e9;
    transform: translateY(-2px);
}

.answer.correct {
    background: #c8e6c9;
    border-color: #388e3c;
    color: #000;
}

.answer.wrong {
    background: #ffcdd2;
    border-color: #c62828;
    color: #000;
}

.btn {
    background: #2e7d32;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.7rem 1.2rem;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background: #256628;
}
</style>
