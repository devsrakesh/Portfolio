<script setup>
// const navTab = [{ id: "1", name: "Boxes", link: "" },{ id: "", name: "", link: "" },{ id: "", name: "", link: "" },];
</script>
<template>
  <header class="w-screen z-50 bg-[rgba(0,0,0,0.5)] p-3 fixed top-0">
    <nav>
      <ul class="flex gap-3">
        <li class="hover:bg-slate-700 px-1 rounded-md">
          <NuxtLink to="/">index</NuxtLink>
        </li>
        <li class="hover:bg-slate-700 px-1 rounded-md">
          <NuxtLink to="/boxes">Boxes</NuxtLink>
        </li>
        <li class="hover:bg-slate-700 px-1 rounded-md">
          <NuxtLink to="/scroll">ScrollTrigger</NuxtLink>
        </li>
        <li class="hover:bg-slate-700 px-1 rounded-md">
          <NuxtLink to="/layers">Layers Section</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
