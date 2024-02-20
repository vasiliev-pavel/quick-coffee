<template>
    <main>
        <slot />
    </main>
</template>

<style>
main {
    padding-top: 5%;
    padding-bottom: 15%;
}

@media (max-width: 768px) {
    main {
        padding-top: 20%;
        padding-bottom: 15%;
    }
}

@media (max-width: 480px) {
    main {
        padding-top: 20%;
        padding-bottom: 15%;
    }
}
</style>