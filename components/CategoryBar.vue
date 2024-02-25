<template>
  <header class="header-container">
    <svg
      class="coffee-shop-icon"
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="100" height="100" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image0_970_9" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_970_9"
          width="100"
          height="100"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAM50lEQVR4nO2de1BU1x3H95+2k3am7Uz/wTTp849MdHmzsDwWlleCIiCvAAKCIkoQBUHRAEEJPkgVDWoMiYkxapuAJiaxJWnwEU1qErMI56Lo3ishNb4mFQqJyr1L4Nc5d2EfZFmUPefuYu935jfD2b3s3t/57O93HnvOWYVClixZsmTJkiVLlixZsmTJkiVLlixZxATXdD8f5Dq1BpYpEDhmm8AyLTyLkMAx3TzL9PEcEkRjmT7jYwjha/C1Bj2z1MAyYfg1aCHp/fDhRweOzTg80DrjO2z9rW5HBo4//JjiQZKBRWqBQ+t5jjmNK1vgGHDEjNCYU/g1DfqOAEfurb/V7V/9x9w+McNw6x04NgOsrNWtDz+nmM66y3U+yrPMGoFl9I4CmNRY9LXAMXWDbOef7/c+MYz+VrfT+G8xMsbDMEGZ0ayYjhL0nZ48i/bzLPMDdRDjI4dFwwKHjhr07f5TuXcxTU0E5NiMAcV0kuEy4yuwzAdSQxAmjBqmRWA7vAkC6VdMB0FP+68FDjU4IyKEe4gYHK3Q1fWbe/FFbMAnBtKkcHXxLEoRWHTT2RUvTBot6Aav70yazB/cm8IN+HgY/cfcbt06+dtHFK4qYNmf4ahwekVz9x0x++HKmYfs+Sb2tFpnNOM2Y9SaXBrG4KWOP/Icc87ZlStMGQqjG7zY/gfFgyDhcodS4Jirzq5UwVFj0Q1Bf95LMZ2FR8g8y/Q7vTI5YpHyX4MehSqmLww06OxKFMhDuetSUPo0qbF9muSrfZqUb3pDk2fbukboRu6j80pTcvrk/j2wIFIL2RFhVCwvJhqunjkxdSgcGnCZ9IVB9IWmgNGSr9hqwAUOXZ+ys/oOyI2OgP2N9dDa0kTFalcWwvZVxY5GyzWXaOjtAcFdW55l2hxx9PjrL8OShFho+/I4NfvkxHuQrFbBjS9OOZq+dNhn59HAfe7Q5NlGKMlXesNSYyyf4znmxak4drurDTYX5kNaUADEerpDgp83JPr73pPN8/eFud6eEOvlfl8222MWxPl4QpZWA4e21TkABjUoXHYEPkWnju5+Acpz5sO31zkY6LsiqX2lPwcpan/H2pTLTKLClQQs+0tH2o1/NO6A0qw06GE74OrX5yW1C+c+HU1fH089Slh0E8/PKVxFU01VY3bnUjtsLy+BzPBQsXeVEx0hiWVFhEHuk5FwtLHBobZk1F6w9QWWU6bQSc3azvXygMa8cOjaliKJlc72h6qcTBIwcAP/w1hX2PILLMklsMyHJBzCtkCrgeczNJIBWRLhB1tXFBK5d6Oho06BYIbR4c2zaISUQyXJCVCRoJYMyPwgb9izroIgEAZwxnAiEPQOSWc2LM2Domh/yYDEeSqhuX4zUSACxzQ7b0pd/D6anDO7K1ZDdoiPJDDan0+CJ2c9Dv98dTdRILhO7n514feSA+FZpprwJwuatmyEeC+lJEBO18SLQL44fJB0hOC5rgrJgQgcc4m0I617XxIr6VxdInUgLWvniO91qfUocSB4GZMTFrERdoJjoO3dJojxmAlFMSooi/cXbc08NZxtSIQvdyTBq8sjTY+P2fr0YPE5bFUpQT96fiJbHOEDMcrH4eZZx+azJjJDd6dKMiACh2poOPH16Y8gPkgJ618Lh7p3oqla+V80EOurFAelNHzhWeZZyYDg5Z00nPj+gg7mqmbB2m2hditzU3MU1L0dZfXY5nFl42MTv0ZJdTDMU3lRgWFMW+iEJDDwomWeQzwtRxJ8PaB0fbC5Ug9FQU62n1VlPl2ihsqdWqvHstJ8rMplG0JgZY35dbDlWrxOYXEAZIUFUwOC62iy1SpEhFehU/tUcQxkazVQuEJtVZGZydaVvaxMDWvrQ+1eU7IuGEprQqyvSTJfk79QBUXxsfQiBLcjUnzVO7olgJoTpamJsDDTz25lL18bCKvrNHavWVERBKs2ma/ZdDgaMlPM12Sn+ED1omyqQAQO5VMHInDMdppO1BUVQPpsL7uVXVwVLKYke9cUlQeJDfdYufZAJORm+5rKaTGe0FBeQhcIi7bSB2LcCEPNidfWV0BKpKfdysZtA05JdtNaqdqqc7BuTzgsXqwylfF7vLGhmnaE0J9s5FmGoenEkR1bIVHjPmFjjA2nouLKILtAClYEQEVDmKlcsSsMCpYHmMqJoe7w7q56qkB4DnVQBzK60UV8w5HBOzAyeJuoE6cP7oX4IHdj13aiMcQWjZiS7AFZWugPVbvNPbE1W0Jh2epAUzkhWAkfH9hDOUKYbupAeA71moHchpG7ZIGcbzkCcepZYooxdX0PWwN5ZnsYFK603xPLX6KC6lfMQMpqQ6Ckyghx41tR4gC0/f1myhHC/EcKIA7v97NnN744BbG+M626tbhyLUfvlbvCYGlRgF0geXkqWL83wtwRqAwydQTWvRYO8Wol9Jz6iDIQxE97IIP6DpijnCmOpE3ppyhAbAPGytWN4ZBf4G8XSO4CP3huf6S5kS9Tw5p6Y68Lty1xKiX0oc8fCCCmlEXLUgP94Okic0oqKg8U24CxMo6WPIseky0gC+b7woY3zUCWLguAqhe1pk7BXF8l/u5i+qcsy0adli2dEw0L081jBhwtZc+FWM1R1R6MsAsk+ykfq44BTmE4VYnpqyIQUtV+VH2QrlGn3O0VOAaqF2VBhsXgcNWmEHHkPVGvyxYQXLacXMzJ9IXavxojpmBZACyKDqcORKJuL92BocAx0LCqGFIjPCfsVeGZXZyC7AJJGldO8TbNCC/K8oOyp5IkiBAJBoa0p04EjoEDm2qsBofPvqSFJYVmAPiTn5nsfX9ALMqZCT6wqXAxfSBSTJ3QnlwUOAZaXt4B8YFKcbyAK/C5NyJgYa79CcdJyxZAUqM9obGyXIoIyZdkZxRtRz4/dADi1ErTwA6DyU7ztR8B9wEkSesBb23ZSB2IQY800/4LKoFjgDveAnN8Zlp1dSdNSfcBJCHEHT54ZRdVGHg7nyRfUGEZT9Wh50xv+2fiAoSSyuAJKzgr9d7LuM0ZK+O/E4Lc4bOmA3QjhGWOK6QSPuKIdrjHeXtAgcVoHLcjlhVuOegT09rfIu0+P1auPRgJCYFK6PrwPboRokdVkgHB503RBrJAGwJJwe6QE+tD1OY/4SUupLj++Umq9y/5Gl8aC+UECytNnQcV8YHEF8jtK4gSF8jhbXT07h91KaQWXndEE8jGgsVQGKUiDmRnrhaSVN5Uo4PnmGckB4K3BJNebC1Y2EuV5ZAdTH7h9eY0DeRGaR2+v6HrPTAyZBBt6FqP9WLr7vO/UzhDAofepgWkuX6zuF2ANJCKeDWsTElw+P4wiDHhvy2AOO+MLLyFi+SGHcHCjr3eKOb6trokokCKn/SHmsW5VIAY6wL5OA0IzcnG9vcOiUBOVscRBZIX5gsNZSscT1nXbKas950Kw7ytjfxRff/+tFUEcmRVDFEgaQFesK+W/PIfnmOGhG7GQ+EKEli0k8bC6xjlTNj3dBQxGBfqU2CO+0w40rCFOBB8aLPCtQ4OYK6RdjIlwA925GiJAdFtThSj7sS+V8jCYNEN6Nb9SuFKwgdGkgaSHxMFtanBxICcXBdn7Ci8+xa5VMWiEZ5DCQpXFOnU9Ux2OqyKDSAG5Ohq4za27o8/IPnB2a5wVY0ez6Qj5ezWFYXi5n5SQN5c/oQI5Fb7GVLR8SWcP/9ThSsIzqY9atClHza0pX83akf4s5mP4RE8qfZkb00VJPl5wKtLIohYZUIgzHGfJR6SRuD+rjptRG4TRltG71BbBliaQZfeh5/DJ5E6csSfMGp4MTT+RJO0DE2gQ/dkuPgOGM7lDxt0mTeHzqXZPOJQcuHIGA/DBKUtXTzJAO8ewgdGEszVQMMMPRdh+M53MPLDEAzfHgBDT5f9/2nLHzH7mvGjIw6dIpyi7AAZsNw+zXPolrMrXbBjw3e+B0thKHaPidVlfjvNgGRY/SKAwLXPEjjmG2dXvDCBwfCwFRAcKbavRdfxz2rgNGXQpX+DYQy1pVsdceg04QbcDpAm21P15HpfAskIuTt5hPAsOusyDbgt4d4UbsBtpKtbgDJtHkIPOt1P8C/a0JodFhxqQ74XIwW3Jbg8Lk297DJd28l7WunNuM0wWkaTJYyJDlzGB0Y6cj6jIJ1dc9kROPHzfTs6fiFGC54hdX7Fg1VEiPeEGvD8nOJB0mQnYI99wSVw6O+ukMZ44z287zJT6FIeuGz7rHgn/yjYZcZPutqZJrrDokd4FhXjfRX0YaCLeMHfoJ75k7P9nhYydHeqxKVGLDpJYi2x+NMZLDqBVxQ69aDKB0Fw5cxDeCrGcJlZgvdciO0Oh9rFn1nlUK/pp1eNswL4sXachvC1+H/wKnTJFj7LkiVLlixZsmTJkiVLlixZsmTJkqX4/9D/AN3oK7ckh2SNAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>

    <!-- Кнопка LOGIN справа -->
    <Button class="login-button" @click="toggleLoginPopup">
      LOGIN
      <svg
        class="login-icon"
        width="45"
        height="45"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="100" height="100" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlink:href="#image0_970_7" transform="scale(0.0104167)" />
          </pattern>
          <image
            id="image0_970_7"
            width="96"
            height="96"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Button>
    <button
      @click="logOut"
      class="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
    >
      Log out
    </button>
  </header>

  <Carousel class="category-bar">
    <CarouselContent class="category-bar_content">
      <CarouselItem class="basis-1/3">Hot Coffee</CarouselItem>
      <CarouselItem class="basis-1/3">Cold Coffee</CarouselItem>
      <CarouselItem class="basis-1/3">Fruit Coffee</CarouselItem>
      <CarouselItem class="basis-1/3">Matcha</CarouselItem>
      <CarouselItem class="basis-1/3">Fresh</CarouselItem>
      <CarouselItem class="basis-1/3">Tea</CarouselItem>
      <CarouselItem class="basis-1/3">Snacks</CarouselItem>
      <CarouselItem class="basis-1/3">Coffee Beans</CarouselItem>
    </CarouselContent>
  </Carousel>
  <LoginPopup
    :isOpen="isLoginPopupOpen"
    @update:isOpen="isLoginPopupOpen = $event"
  />
</template>

<script setup>
import { ref } from "vue";
const supabase = useSupabaseClient();

const isLoginPopupOpen = ref(false);

const toggleLoginPopup = () => {
  console.log(isLoginPopupOpen);
  isLoginPopupOpen.value = !isLoginPopupOpen.value;
};

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
};
</script>

<style>
.category-bar {
  /*border-radius: 10000px;*/
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.98);
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  width: 93%;
  margin: 2% auto;
  margin-top: 5em; /* Для нижнего отступа */

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
}

.category-bar_content {
  display: flex;

  & > div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 25px;
  }
}

/* Стили для header */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em; /* Для боковых отступов */

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
}

/* Стили для кнопки LOGIN */
.login-button {
  display: inline-flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 4rem;
  background-color: rgb(255, 255, 255, 0.3); /* Белый фон с 50% прозрачностью */
  cursor: pointer;
}

/* Стили для SVG иконки в кнопке */
.login-icon {
  margin-left: 5px;
  margin-right: -10px;
  /* Ваши стили для SVG иконки */
}
</style>
