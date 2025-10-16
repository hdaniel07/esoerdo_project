<template>
    <section class="map-section">
        <div class="map-header">
            <h1>Esőerdők térképe</h1>
            <p>Fedezd fel bolygónk legfontosabb esőerdeit egy interaktív térképen.</p>
        </div>

        <div class="map-wrapper">
            <div id="map" ref="mapContainer"></div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const mapContainer = ref(null);

onMounted(() => {
    const map = L.map(mapContainer.value, {
        minZoom: 2,
        maxZoom: 6,
        maxBounds: [
            [-85, -180],
            [85, 180],
        ],
        maxBoundsViscosity: 1.0,
        worldCopyJump: false,
    }).setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap közreműködők',
        noWrap: true,
    }).addTo(map);

    const rainforests = [
        {
            name: "Amazonas",
            coords: [-3, -60],
            description:
                "A világ legnagyobb esőerdeje, több mint 5,5 millió km² területtel.",
        },
        {
            name: "Kongó-medence",
            coords: [0, 20],
            description:
                "Afrika szívében található, a világ második legnagyobb esőerdeje.",
        },
        {
            name: "Délkelet-Ázsia",
            coords: [2, 113],
            description:
                "Indonézia és Malajzia hatalmas esőerdei, melyeket a pálmaolaj-termelés veszélyeztet.",
        },
        {
            name: "Madagaszkár",
            coords: [-18.8, 46.8],
            description:
                "Egyedülálló állatvilág, mint például a makik és kaméleonok, melyek csak itt találhatók meg.",
        },
        {
            name: "Új-Guinea",
            coords: [-6, 147],
            description:
                "Sok ismeretlen faj és őslakos törzs él itt, még kevéssé feltárt terület.",
        },
    ];

    rainforests.forEach((forest) => {
        const marker = L.marker(forest.coords).addTo(map);

        marker.bindPopup(`
      <div class="popup">
        <h3>${forest.name}</h3>
        <p>${forest.description}</p>
      </div>
    `);

        marker.on("click", () => {
            map.flyTo(forest.coords, 5, {
                animate: true,
                duration: 1.5,
            });
            marker.openPopup();
        });
    });
});



</script>

<style scoped>
.map-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem;
    max-width: 1200px;
    margin: 4rem auto;
}

.map-header {
    text-align: center;
    margin-bottom: 2rem;
    font-family: "Noto Sans", sans-serif;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
}

.map-header h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #585858;
    margin-bottom: 0.5rem;
}

.map-header p {
    font-size: 1rem;
    color: #fff;
}

.map-wrapper {
    width: 100%;
    height: 500px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
}

#map {
    height: 100%;
    width: 100%;
}

.leaflet-popup-content-wrapper {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.leaflet-popup-content h3 {
    font-family: "Poppins", sans-serif;
    color: #1b5e20;
    margin-bottom: 4px;
}

.leaflet-popup-content p {
    color: #333;
    font-size: 0.9rem;
}
</style>
