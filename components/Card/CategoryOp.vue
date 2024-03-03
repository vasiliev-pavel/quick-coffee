<template>
  <div class="flex flex-wrap -m-2">
    <div
      v-for="option in props.options"
      :key="option.id"
      class="p-2 w-1/2 sm:w-1/3 md:w-1/4"
    >
      <div
        class="flex flex-col items-center bg-white shadow rounded-lg overflow-hidden"
      >
        <img :src="option.imageUrl" alt="" class="w-full h-32 object-cover" />
        <div class="p-4 w-full">
          <div class="text-center text-sm font-semibold h-12 overflow-hidden">
            {{ option.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Options :isOpen="isOptionsOpen" @update:isOpen="isOptionsOpen = $event" /> -->
</template>

<script>
import Options from "~/components/card/Options.vue";
const props = defineProps({
  options: Array,
});
const userStore = useUserStore();
const router = useRouter();
const isOptionsOpen = ref(false);

const toggleLoginPopup = () => {
  isOptionsOpen.value = !isOptionsOpen.value;
};
</script>
