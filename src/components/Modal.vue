<template>
  <div>

    <transition name="modal-fade">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
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
                  <h3 class="text-lg leading-6 font-medium font-bold text-gray-900" id="modal-headline">
                    Partagez ce logement avec des proches
                  </h3>
                  <div class="flex mt-2 mb-8">
                    <img alt="gallery" class="w-16 h-16 rounded-2xl object-cover object-center block"
                        src="https://dummyimage.com/64x64">
                    <h3 class="text-lg text-left leading-6 ml-2 font-medium text-gray-900" id="modal-headline">
                      Magnifique Appartement Bord De Mer à Hammamet
                    </h3>
                  </div>
                  <div class="grid grid-cols-2 gap-4 mt-2">
                    <h3 class="col-span-2 text-lg leading-6 ml-2 font-medium text-gray-900" id="modal-headline">
                      Réseaux sociaux
                    </h3>
                    <button class="flex px-2 py-4 hover:bg-gray-100 rounded-xl">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px;"><path fill="#1877F2" d="M32 0v32H0V0z"></path><path d="M22.938 16H18.5v-3.001c0-1.266.62-2.499 2.607-2.499h2.018V6.562s-1.831-.312-3.582-.312c-3.654 0-6.043 2.215-6.043 6.225V16H9.436v4.625H13.5V32h5V20.625h3.727l.71-4.625z" fill="#FFF"></path></svg>
                      <h3 class="col-span-2 text-lg leading-6 ml-2 font-medium text-gray-900" id="modal-headline">
                        Facebook
                      </h3>
                    </button>
                    <button class="flex px-2 py-4 hover:bg-gray-100 rounded-xl">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px;"><path fill="#1DA1F2" d="M0 0H32V32H0z"></path><path d="M18.664 7.985a4.5 4.5 0 0 0-2.289 4.89c-3.5-.188-6.875-1.813-9.063-4.625a4.25 4.25 0 0 0 1.375 5.875c-.687 0-1.374-.125-2-.438.063 2.063 1.5 3.876 3.5 4.313-.624.188-1.312.188-2 .063.626 1.812 2.313 3.062 4.188 3.125-1.813 1.5-4.25 2.187-6.563 1.812a12.438 12.438 0 0 0 19.313-11.188c.875-.624 1.625-1.374 2.188-2.312-.75.375-1.625.625-2.5.75.937-.563 1.625-1.438 2-2.5-.875.5-1.813.875-2.813 1.063a4.5 4.5 0 0 0-5.336-.828z" fill="#FFF"></path></svg>
                      <h3 class="col-span-2 text-lg leading-6 ml-2 font-medium text-gray-900" id="modal-headline">
                        Twitter
                      </h3>
                    </button>

                    <h3 class="col-span-2 text-lg leading-6 ml-2 font-medium text-gray-900" id="modal-headline">
                      Messagerie et e-mails
                    </h3>
                    <button class="flex px-2 py-4 hover:bg-gray-100 rounded-xl">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32px; width: 32px;"><path d="m32 0v32h-32v-32z" fill="#25d366"></path><path d="m4 28 1.695-6.163a11.824 11.824 0 0 1 -1.595-5.946c.003-6.556 5.364-11.891 11.95-11.891a11.903 11.903 0 0 1 8.453 3.488 11.794 11.794 0 0 1 3.497 8.414c-.003 6.557-5.363 11.892-11.95 11.892-2 0-3.97-.5-5.715-1.448zm6.628-3.807c1.684.995 3.292 1.591 5.418 1.592 5.474 0 9.933-4.434 9.936-9.885.002-5.462-4.436-9.89-9.928-9.892-5.478 0-9.934 4.434-9.936 9.884 0 2.225.654 3.891 1.754 5.634l-1.002 3.648 3.76-.98h-.002zm11.364-5.518c-.074-.123-.272-.196-.57-.344-.296-.148-1.754-.863-2.027-.96-.271-.1-.469-.149-.667.147-.198.295-.767.96-.94 1.157s-.346.222-.643.074c-.296-.148-1.253-.46-2.386-1.466-.881-.783-1.477-1.75-1.65-2.045s-.018-.455.13-.602c.134-.133.296-.345.445-.518.15-.17.2-.294.3-.492.098-.197.05-.37-.025-.518-.075-.147-.668-1.6-.915-2.19-.241-.577-.486-.499-.668-.508l-.569-.01a1.09 1.09 0 0 0 -.79.37c-.272.296-1.039 1.01-1.039 2.463s1.064 2.857 1.211 3.054c.15.197 2.092 3.18 5.068 4.458.708.304 1.26.486 1.69.622.712.224 1.359.193 1.87.117.57-.084 1.755-.714 2.002-1.404.248-.69.248-1.28.173-1.405z" fill="#FFF"></path></svg>
                      <h3 class="col-span-2 text-lg leading-6 ml-2 font-medium text-gray-900" id="modal-headline">
                        WhatsApp
                      </h3>
                    </button>
                    <button class="flex px-2 py-4 hover:bg-gray-100 rounded-xl">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 32.5px; width: 32.5px;"><defs><radialGradient cx="19.25%" cy="99.447%" fx="19.25%" fy="99.447%" r="108.96%" gradientTransform="scale(1 .99991)" id="fbmessengera"><stop stop-color="#09F" offset="0%"></stop><stop stop-color="#A033FF" offset="60.98%"></stop><stop stop-color="#FF5280" offset="93.48%"></stop><stop stop-color="#FF7061" offset="100%"></stop></radialGradient></defs><path fill="#FFF" d="M32 0v32H0V0z"></path><path d="M16 4C9.241 4 4 8.953 4 15.64c0 3.498 1.434 6.522 3.768 8.61.195.174.315.42.321.684l.066 2.136a.96.96 0 0 0 1.347.849l2.382-1.05a.964.964 0 0 1 .642-.048c1.095.3 2.259.462 3.474.462 6.759 0 12-4.953 12-11.64S22.759 4 16 4z" fill="url(#fbmessengera)"></path><path d="M8.794 19.045l3.525-5.592a1.8 1.8 0 0 1 2.604-.48l2.805 2.103a.72.72 0 0 0 .867-.003l3.786-2.874c.504-.384 1.164.222.828.759l-3.528 5.589a1.8 1.8 0 0 1-2.604.48l-2.805-2.103a.72.72 0 0 0-.867.003l-3.786 2.874c-.504.384-1.164-.219-.825-.756z" fill="#FFF"></path></svg>
                      <h3 class="col-span-2 text-lg leading-6 ml-2 font-medium text-gray-900" id="modal-headline">
                        Messanger
                      </h3>
                    </button>

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
    name: 'Modal',
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