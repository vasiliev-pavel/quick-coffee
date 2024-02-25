import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { parse, stringify } from "zipson";

export const useUserStore = defineStore(
  "user",
  () => {
    const name = ref(useSupabaseUser());

    return { name };
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
