<script setup>

</script>

<template>
    <div class="container bg-white">
        <div class="elements">
            <div class="element1 d-flex" data-aos="fade-left" data-aos-duration="2000">
                <div class="bg col-lg-6"></div>
                <div class="szoveg col-lg-6">
                    <h3>Miért fontosak az esőerdők?</h3>
                    <p>Szén-dioxid megkötés: Az esőerdők hatalmas mennyiségű szén-dioxidot képesek elnyelni, ezáltal
                        lassítják a klímaváltozást.
                        Oxigéntermelés: Az esőerdők hatalmas mennyiségű oxigént termelnek – nem véletlenül nevezik őket
                        a Föld tüdejének.
                        Gyógyászat: Számos gyógyszer alapanyaga származik esőerdei növényekből – és még rengeteg
                        felfedezés vár ránk.
                        Biodiverzitás: Az esőerdők több millió faj otthonai, köztük veszélyeztetett állatoké, mint az
                        orángután vagy a jaguár.</p>
                </div>
            </div>
            <div class="element2 element1 d-flex" data-aos="fade-right" data-aos-duration="2000">
                <div class="szoveg col-lg-6">
                    <h3>Mi fenyegeti az esőerdőket?</h3>
                    <p>Az esőerdők gyors ütemű pusztulása globális problémát jelent. A legfőbb veszélyek:
                        Erdőirtás a mezőgazdaság (pl. szója, pálmaolaj) terjeszkedése miatt
                        Ipari fakitermelés
                        Bányászat
                        Illegális vadászat
                        Éghajlatváltozás
                        Naponta több ezer hektárnyi erdő tűnik el – ezzel együtt élőhelyek, fajok, sőt, egyensúlyi
                        rendszerek is megsemmisülnek.</p>
                </div>
                <div class="bg col-lg-6"></div>
            </div>
            <div class="element1 d-flex" data-aos="fade-left" data-aos-duration="2000">
                <div class="bg col-lg-6"></div>
                <div class="szoveg col-lg-6">
                    <h3>Te is segíthetsz!</h3>
                    <p>A változás nálad kezdődik. Íme néhány dolog, amit te is megtehetsz:
                        Vásárolj fenntartható, erdőbarát termékeket (pl. FSC minősítésű fa, pálmaolajmentes termékek)
                        Támogass természetvédelmi szervezeteket
                        Csökkentsd az ökológiai lábnyomodat
                        Tájékozódj, tanulj, és oszd meg másokkal is az ismereteidet</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 50%;
    margin-top: 90px;
}



.element1 {
    margin-bottom: 20px;
}

.element1 .bg {
    width: 50%;
    height: auto;
    background-image: url(../assets/element1pic.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
    padding: 30px;
}

.element1 .szoveg {
    color: #000;
    padding: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;

}

.element1 .szoveg h3 {
    font-family: "Noto Sans", sans-serif;
}

.element1 .szoveg p {
    color: #696969;
    text-align: end;
}

.element1 .szoveg p:nth-child(2) {
    text-align: start;
}

.element1:nth-child(2) .bg {
    background-image: url(../assets/element2pic.jpg)
}

.element1:nth-child(3) .bg {
    background-image: url(../assets/element3pic.jpg)
}


</style>