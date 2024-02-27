<template>
  <header class="container relative overflow-x-hidden">
    <NavBar />
  </header>
  <main class="container relative overflow-x-hidden">
    <slot />
    <Toaster />
  </main>
</template>
