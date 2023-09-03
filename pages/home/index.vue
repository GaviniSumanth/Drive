<template>
  <body class="font-poppins antialiased">
    <div id="view" class="flex h-full w-screen flex-row">
      <button
        class="absolute left-0 top-0 rounded-md border-2 border-gray-200 bg-white p-2 text-gray-500 shadow-lg focus:bg-teal-500 focus:text-white focus:outline-none"
        @click="toggleSidebar"
      >
        <font-awesome-icon class="h-6 w-6" :icon="['fas', 'bars']" />
      </button>
      <div
        v-show="expanded"
        id="sidebar"
        class="w-30 h-screen overflow-x-hidden bg-white px-3 shadow-xl transition-transform duration-300 ease-in-out md:block md:w-60 lg:w-60"
      >
        <div class="mt-10 space-y-6 md:space-y-10">
          <div id="profile" class="flex flex-col place-items-center space-y-3">
            <font-awesome-icon
              class="h-32 w-32"
              :icon="['fas', 'circle-user']"
            />
            <div>
              <h2
                class="text-center text-xs font-medium text-teal-500 md:text-sm"
              >
                {{ user.name }}
              </h2>
              <p class="text-center text-xs text-gray-500">{{ user.role }}</p>
            </div>
          </div>
          <div id="menu" class="flex flex-col space-y-2">
            <NuxtLink
              href=""
              class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-teal-500 hover:text-white"
            >
              <span class="">My Storage</span>
            </NuxtLink>
            <NuxtLink
              href=""
              class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-teal-500 hover:text-white"
            >
              <span class="">Shared By Me</span>
            </NuxtLink>
            <NuxtLink
              href=""
              class="rounded-md px-2 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-teal-500 hover:text-white"
            >
              <span class="">Shared With Me</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      expanded: ref(true),
      user: {
        name: "User's Name",
        role: 'Role'
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.expanded = !this.expanded
    }
  }
}
</script>
