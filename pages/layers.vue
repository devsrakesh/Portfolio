<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const main = ref();
const scrollTween = ref();
let ctx;

const goToSection = (i) => {
  // Remove the GSAP instance with the specific ID
  // to prevent memory leak
  ctx.data.forEach((e) => {
    if (e.vars && e.vars.id === "scrollTween") {
      e.kill();
    }
  });
  ctx.add(() => {
    scrollTween.value = gsap.to(window, {
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 1,
      id: "scrollTween",
      onComplete: () => (scrollTween.value = null),
      overwrite: true,
    });
  });
};

onMounted(() => {
  ctx = gsap.context((self) => {
    const panels = self.selector("#panel");
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=200%",
        onToggle: (self) =>
          self.isActive && !scrollTween.value && goToSection(i),
      });
    });
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <main ref="main">
    <section id="panel" class="sticky top-0 h-screen w-screen blue">
      Zero
    </section>
    <section id="panel" class="sticky top-0 h-screen w-screen gray">
      ONE
    </section>
    <section id="panel" class="sticky top-0 h-screen w-screen orange">
      TWO
    </section>
    <section id="panel" class="sticky top-0 h-screen w-screen purple">
      THREE
    </section>
    <section id="panel" class="sticky top-0 h-screen w-screen green">
      FOUR
    </section>
    <section class="bg-red-300 sticky top-0 h-screen w-screen">hello</section>
  </main>
</template>
