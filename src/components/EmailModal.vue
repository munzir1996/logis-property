<template>
  <div>

    <transition name="modal-fade">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex sm:items-end justify-center min-h-screen w-full h-full sm:pt-4 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->

          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div
            class="inline-block align-bottom bg-white sm:rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:items-start">
                <button type="button" @click="close"
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full hover:bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                  <!-- Heroicon name: outline/exclamation -->
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false"
                    style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                    <path d="m6 6 20 20"></path>
                    <path d="m26 6-20 20"></path>
                  </svg>
                </button>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="flex mb-4">
                    <div class="flex flex-wrap h-28 lg:pl-10 w-1/3">
                      <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full rounded object-cover object-center block"
                          src="https://dummyimage.com/130x96">
                      </div>
                    </div>
                    <div class="block mt-2 ml-2 text-left">
                      <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span class="text-left"> CENTURY 21 – Mutuelleville</span>
                      </div>
                      <div>
                        <p class="font-bold text-gray-900 mt-2">
                          Lien vers les annonces
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:ml-0 lg:ml-12">
                    <input type="text" class="form-input w-full rounded mb-4" placeholder="Nom">
                    <input type="text" class="form-input w-full rounded mb-4" placeholder="Téléphone">
                    <input type="text" class="form-input w-full rounded mb-4" placeholder="E-mail">
                    <textarea
                      class="form-textarea w-full rounded mb-4">Je souhaite avoir plus d'information sur ce bien  [Single family home]</textarea>
                    <select class="w-full rounded mb-4">
                      <option></option>
                    </select>
                    <div class="flex">
                      <input type="checkbox" class="form-input mb-4 rounded">
                      <label class="pl-2 text-sm text-left">En soumettant ce formulaire, j'accepte Conditions
                        d'utilisation</label>
                    </div>
                    <div class="flex justify-center mt-6">
                      <button type="submit"
                        class="block w-full sm:px-4 lg:px-11 py-2 mt-4 text-center text-white bg-teal-500 rounded-md sm:w-auto sm:ml-3 sm:mt-0 hover:bg-teal-600 ml-4">
                        Email </button>
                      <button type="submit"
                        class="block w-full sm:px-4 lg:px-11 py-2 mt-4 text-center text-white bg-teal-500 rounded-md sm:w-auto sm:ml-3 sm:mt-0 hover:bg-teal-600 ml-4">
                        Appeler </button>
                    </div>
                    <div class="flex justify-center mt-2">
                      <button type="submit"
                        class="block w-full sm:px-14 lg:px-28 py-2 mt-4 text-center text-white bg-teal-500 rounded-md sm:w-auto sm:ml-3 sm:mt-0 hover:bg-teal-600 ml-4">
                        WhatsApp </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'EmailModal',
    props: {},
    methods: {
      close() {
        this.$emit("close");
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>