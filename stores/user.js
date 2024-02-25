import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { parse, stringify } from "zipson";

export const useUserStore = defineStore(
  "user",
  () => {
    const name = ref(null);
    const setData = (data) => {
      name.value = data;
    };
    return { name, setData };
  },
  {
    persist: {
      storage: persistedState.cookies,
      serializer: {
        deserialize: parse,
        serialize: stringify,
      },
    },
  }
);
