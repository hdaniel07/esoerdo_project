<script setup>

</script>

<template>
    <section class="text-center pt-5">
        <div class="container">
            <i class="bi bi-send-fill"></i>
            <h2>Iratkozz fel hírlevelünkre!</h2>
            <div class="d-flex justify-content-center mt-4">
                <input type="email" placeholder="ENTER EMAIL ADDRESS...">
                <button class="btn btn-light">Notify Me!</button>
            </div>
        </div>
        <footer class="text-center sticky-bottom">
        <p>© Majomparádé Esőerdő Tisztító- és Karbantartó Kft. </p>
        </footer>
    </section>
    
</template>

<style scoped>
section {
    color: #000;
    min-height: 500px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.5)), url(../src/assets/hero-bg.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Noto Sans", sans-serif;
    text-transform: uppercase;
}

i{
    font-size: 30px;
}

input{
    width: 50%;
    line-height: 2rem;
    padding: 10px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 5px;
    margin-right: 5px;
    transition: transform 0.3s ease;
}

input:hover{
    transform: translateY(-2px);
}

button{
    transition: transform 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;
}

button:hover{
    transform: translateY(-2px);
}


footer {
    color: rgba(0, 0, 0, 0.7);
    top: 100%;
    font-weight: bold;
}
</style>