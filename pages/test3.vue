<template>
  <div>
    <div class="relative">
      <div
        class="fixed bg-slate-700 w-80 h-96 flex"
        :class="{ shake: isShrunk, test1: !isShrunk }"
      >
        <!-- Левая половина -->
        <div
          class="w-1/2 h-full bg-blue-500"
          :class="{ 'test-image': isShrunk }"
        ></div>

        <!-- Правая половина -->
        <div
          class="w-1/2 h-full bg-green-500 flex flex-col items-center justify-between p-8"
          :class="{ 'test-image2': isShrunk }"
        >
          <!-- Три круглых блока -->
          <div class="flex w-full items-center space-x-2">
            <div class="w-20 h-20 bg-red-500 rounded-full"></div>
            <div class="w-20 h-20 bg-red-500 rounded-full"></div>
            <div class="w-20 h-20 bg-red-500 rounded-full"></div>
          </div>

          <!-- Блок с текстом -->
          <div
            class="text-white opacity-100"
            :class="{ 'fade-text': isShrunk }"
          >
            Какой-то текст здесь
          </div>

          <!-- Блок с текстом и кнопкой -->
          <div
            class="w-full flex items-center justify-between"
            :class="{ 'test-image3': isShrunk }"
          >
            <div class="text-white">Ещё текст</div>
            <div class="bg-blue-500 rounded-full w-20 h-20">
              <button class=""></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <div v-for="n in 16" :key="n" class="aspect-square bg-red-500"></div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce"; // Пример использования lodash для дебаунса

export default {
  name: "App",
  data() {
    return {
      isShrunk: false, // Состояние для отслеживания уменьшенного состояния голубого блока
    };
  },
  mounted() {
    this.debouncedHandleScroll = debounce(this.handleScroll, 50);
    window.addEventListener("scroll", this.debouncedHandleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.debouncedHandleScroll);
  },
  methods: {
    handleScroll() {
      const shouldShrink = window.scrollY > 100;
      if (this.isShrunk !== shouldShrink) {
        this.isShrunk = shouldShrink;
      }
    },
  },
};
</script>

<style scoped>
.shake {
  animation: shrinkToHeader 1.5s ease both;
}
.test1 {
  animation: headerToshrink 1.5s ease both;
}
.test-image {
  animation: imageAnim 1.5s ease both;
}
.test-image2 {
  animation: imageAnim2 1.5s ease both;
}
.test-image3 {
  animation: imageAnim3 1s ease both;
}
.fade-text {
  animation: fadeOut 1.5s ease both;
}
@keyframes shrinkToHeader {
  0% {
    top: 50%;
    left: 50%;
    width: 50rem; /* Исходная ширина */
    height: 24rem; /* Исходная высота */
    transform: translate(-50%, -50%);
    background-color: slategray;
  }
  100% {
    top: 0;
    left: 50%;
    width: 50rem; /* Ширина хедера */
    height: 10rem; /* Высота хедера */
    transform: translateX(-50%);
    background-color: #333; /* Цвет фона хедера */
    .test-image {
      width: 50%;
      height: 100%;
      background: #000;
    }
  }
}

@keyframes headerToshrink {
  0% {
    top: 0;
    left: 50%;
    width: 50rem; /* Ширина хедера */
    height: 10rem; /* Высота хедера */
    transform: translateX(-50%);
    background-color: #333; /* Цвет фона хедера */
  }
  100% {
    top: 50%;
    left: 50%;
    width: 50rem; /* Исходная ширина */
    height: 24rem; /* Исходная высота */
    transform: translate(-50%, -50%);
    background-color: slategray;
  }
}

@keyframes imageAnim {
  0% {
  }
  100% {
    width: 25%;
  }
}

@keyframes imageAnim2 {
  0% {
  }
  100% {
    width: 100%;
    flex-direction: row;
  }
}

@keyframes imageAnim3 {
  0% {
  }

  100% {
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
