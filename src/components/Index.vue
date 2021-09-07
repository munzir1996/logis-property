<template>
  <div>

    <Header/>

    <section class="text-gray-600 body-font">
      <div class="container sm:px-16 py-6 mx-auto flex flex-wrap">
        <div class="flex w-full mb-2 flex-wrap justify-between">
          <h2 class="sm:text-2xl font-bold font-medium text-left title-font text-gray-900 lg:mb-0 sm:mb-4 px-2 sm:px-0">
            Master Cleanse Magnifique Appartement Bord De Mer à Hammamet
          </h2>
          <p class="lg:pl-6 px-2 sm:px-0 leading-relaxed text-base text-xl font-bold">
            $1000
          </p>
        </div>
        <div class="flex w-full sm:mb-6 flex-wrap justify-between">
          <p class="font-medium title-font text-gray-700 lg:mb-0 sm:mb-4 px-2 sm:px-0">
            <span class="underline p-0">
              Hammamet
            </span>
            ,
            <span class="underline p-0">
              Nabeul
            </span>
            ,
            <span class="underline p-0">
              Tunisie
            </span>
          </p>
          <div class="flex">
            <button type="button" @click="showModal = !showModal" class="hover:bg-gray-100 px-1.5 py-1.5 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            <Modal v-show="showModal" @close="closeModal" />

            <button class="hover:bg-gray-100 px-1.5 py-1.5 rounded-2xl ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap sm:w-1/2 w-full">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full sm:rounded-2xl object-cover object-center block"
                src="https://dummyimage.com/600x360">
            </div>
          </div>

          <div class="hidden sm:flex sm:flex-wrap sm:w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover rounded-2xl h-full object-center block"
                src="https://dummyimage.com/503x303">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover rounded-2xl h-full object-center block"
                src="https://dummyimage.com/503x303">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover rounded-2xl h-full object-center block"
                src="https://dummyimage.com/503x303">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover rounded-2xl h-full object-center block"
                src="https://dummyimage.com/503x303">
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="text-gray-600 body-font sm:hidden">
      <div class="container px-2 mx-auto">
        <div class="grid grid-cols-2 gap-4">
          <button  type="submit" class="block col-span-2 w-full py-2 text-center text-white bg-teal-500 rounded-mdhover:bg-teal-600">
            Appeler
          </button>
          <button  type="submit" class="block w-full py-2 text-center text-white bg-teal-500 rounded-mdhover:bg-teal-600">
            Email
          </button>
          <button  type="submit" class="block w-full py-2 text-center text-white bg-teal-500 rounded-mdhover:bg-teal-600">
            WhatsApp
          </button>
        </div>
      </div>

    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-2 sm:px-16 py-6 mx-auto">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4">

          <div class="col-span-2">
            <div class="border-b pb-4 sm:pb-8">
              <div class="flex">
                <h2 class="sm:text-xl pb-2 font-bold font-medium title-font text-gray-900 lg:mb-0 sm:mb-4">
                  Logement entier : appartement. Hôte : Nourhene
                </h2>
              </div>
              <div class="flex">
                <p class="font-medium title-font text-gray-700 lg:mb-0 mb-4">
                  4 voyageurs, · 1 chambre, · 2 lits, · 1 salle de bain
                </p>
              </div>
            </div>

            <div class="flex border-b py-4 sm:py-8">
              <p class="font-medium title-font text-left text-gray-700 lg:mb-0 sm:mb-4">
                Bonjour Bonjour !
                Je vous propose pour vos vacances en bord de mer cet havre de paix en plein cœur de hammamet :-)
                Idéalement situé, dans la zone touristique Hammamet nord, la résidence côte d'azur en bord de mer entourée de verdure et ayant un accès direct à une plage privée et aménagée . Cet appartement est très bien équipé, dotant d’une magnifique vue sur mer .
              </p>
            </div>

            <div class="flex py-4 py-4 sm:py-8">
              <h2 class="sm:text-xl font-bold font-medium title-font text-gray-900 lg:mb-0 sm:mb-4">
                Ce que propose ce logement
              </h2>
            </div>

            <div class="grid grid-cols-2">

              <!-- grid -->
              <div class="text-left">
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M24 27c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 28.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 29c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 29c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 29c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 30.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 27c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 27c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 27zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 23.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 24c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 24c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 24c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 25.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 22c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 22c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 22zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 18.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 19c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 19c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 19c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 20.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 17c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 17c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 17zM16 1a9 9 0 0 1 8.76 11.072c.71.131 1.374.45 1.911.937.306.276.71.445 1.142.483L28 13.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003 1.951 1.951 0 0 0-1.142-.483l-.145-.007h-.084a2.001 2.001 0 0 0-1.15.378l-.137.112a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 14c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008 1.951 1.951 0 0 0-1.142-.484l-.145-.007h-.084a2.002 2.002 0 0 0-1.15.378l-.137.112a3.96 3.96 0 0 1-2.443 1.003L4 15.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483 3.916 3.916 0 0 1 1.91-.939A9 9 0 0 1 16 1zm0 2a7 7 0 0 0-6.636 9.235c.482.168.926.429 1.307.774.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 12c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.38-.345.825-.606 1.304-.776A7 7 0 0 0 16 3z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Accès plage ou bord de mer</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Wifi</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Télévision</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm0 2H4v24h24zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-5.841 7.5c-.342 0-.68.024-1.014.073a7 7 0 0 0 13.107 4.58 8.976 8.976 0 0 1-6.91-2.374l-.236-.23a6.966 6.966 0 0 0-4.947-2.049zM16 9a6.997 6.997 0 0 0-6.066 3.504l.225-.004c2.262 0 4.444.844 6.124 2.407l.237.229a6.979 6.979 0 0 0 4.948 2.05c.493 0 .98-.05 1.456-.151A7 7 0 0 0 16 9zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Lave-linge</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M2.05 6.292L4 8.242V25a3 3 0 0 0 2.824 2.995L7 28h16.757l1.95 1.95c-.161.023-.325.038-.49.045L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7c0-.24.017-.477.05-.708zm1.657-4l26 26-1.414 1.415-26-26 1.414-1.414zM25 2a5 5 0 0 1 4.995 4.783L30 7v18c0 .24-.017.476-.05.707L28 23.757V7a3 3 0 0 0-2.824-2.995L25 4H8.242l-1.95-1.95c.162-.023.325-.038.491-.045L7 2h18zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17h2.03zm5.9 4.243l1.352 1.352a6.954 6.954 0 0 1-1.351.334L17 21.243zM21.243 17l1.686.001c-.067.467-.18.919-.334 1.351L21.243 17zm-4.242-7.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1l.001-2.029zm-7.596 4.577L10.757 15 9.071 15c.067-.467.18-.92.334-1.352zM15 9.071l-.001 1.686-1.35-1.352A6.954 6.954 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Détecteur de monoxyde de carbone</p>
                </div>

              </div>

              <div class="text-left">
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Cuisine</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Parking gratuit sur place</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Ascenseur</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Climatisation</p>
                </div>
                <div class="flex">
                  <svg class="w-6 h-6 mb-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M3.486 7.727l1.447 1.448A12.94 12.94 0 0 0 3 16c0 7.18 5.82 13 13 13 2.503 0 4.84-.707 6.824-1.933l1.448 1.448A14.93 14.93 0 0 1 16 31C7.716 31 1 24.284 1 16c0-3.057.915-5.901 2.486-8.273zm.221-5.434l26 26-1.414 1.414-26-26 1.414-1.414zM16 1c8.284 0 15 6.716 15 15 0 3.057-.914 5.9-2.485 8.272l-1.448-1.448A12.94 12.94 0 0 0 29 16c0-7.18-5.82-13-13-13a12.94 12.94 0 0 0-6.825 1.933L7.727 3.486A14.93 14.93 0 0 1 16 1zm-4.9 16a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17h2.03zm5.9 4.243l1.352 1.352a6.954 6.954 0 0 1-1.351.334L17 21.243zM21.243 17l1.686.001c-.067.467-.18.919-.334 1.351L21.243 17zm-4.242-7.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1l.001-2.029zm-7.596 4.577L10.757 15 9.071 15c.067-.467.18-.92.334-1.352zM15 9.071l-.001 1.686-1.35-1.352A6.954 6.954 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
                  <p class="font-medium title-font text-gray-900 lg:mb-0 pl-4">Détecteur de fumée</p>
                </div>
              </div>
            </div>
          </div>

          <!-- grid -->
          <div class="pb-8 sticky hidden sm:block">
            <div class="grid grid-cols-2">
              <div class="flex flex-wrap h-28 lg:pl-10">
                <div class="md:p-2 p-1 w-full">
                  <img alt="gallery" class="w-full h-full rounded object-cover object-center block"
                    src="https://dummyimage.com/130x96">
                </div>
              </div>
              <div class="block mt-2 ml-2">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
              <textarea class="form-textarea w-full rounded mb-4">Je souhaite avoir plus d'information sur ce bien  [Single family home]</textarea>
              <select class="w-full rounded mb-4">
                <option></option>
              </select>
              <div class="flex">
                <input type="checkbox" class="form-input mb-4 rounded">
                <label class="pl-2 text-sm text-left">En soumettant ce formulaire, j'accepte Conditions d'utilisation</label>
              </div>
              <div class="flex justify-center mt-6">
                <button type="submit" class="block w-full sm:px-4 lg:px-11 py-2 mt-4 text-center text-white bg-teal-500 rounded-md sm:w-auto sm:ml-3 sm:mt-0 hover:bg-teal-600 ml-4"> Email </button>
                <button type="submit" class="block w-full sm:px-4 lg:px-11 py-2 mt-4 text-center text-white bg-teal-500 rounded-md sm:w-auto sm:ml-3 sm:mt-0 hover:bg-teal-600 ml-4"> Appeler </button>
              </div>
              <div class="flex justify-center mt-2">
                <button type="submit" class="block w-full sm:px-14 lg:px-28 py-2 mt-4 text-center text-white bg-teal-500 rounded-md sm:w-auto sm:ml-3 sm:mt-0 hover:bg-teal-600 ml-4"> WhatsApp </button>
              </div>
            </div>
          </div>

          <div class="hidden sm:block col-span-2 border-t pt-8">
            <div class="flex">
              <h2 class="sm:text-xl font-bold font-medium title-font text-gray-900 lg:mb-0 pb-4">
                Où se situe le logement
              </h2>
            </div>
            <div>
              <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/draw-radius-circle-map/">Radius map calculator</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Header from './Header.vue'
import Modal from './Modal.vue'

  export default {
    name: 'Index',
    components: {
      Header,
      Modal,
    },
    props: {},
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      showConfirmDeleteModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      deleteCustomers() {
        console.log("goodbye");
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sticky {
  position: sticky;
  top: 0;
}
</style>



