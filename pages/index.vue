<script setup lang="ts">
useSeoMeta({
  title: '',
  description: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  ogUrl: ''
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <section class="flex min-h-screen items-center justify-center bg-white py-24">
    <div class="mx-auto max-w-[43rem]">
      <div class="text-center">
        <p class="text-lg font-medium leading-8 text-indigo-600/95">
          Introducing a new Storage Service
        </p>
        <h1
          class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black"
        >
          Cloudy
        </h1>
        <p class="mt-3 text-lg leading-relaxed text-slate-400">Cloud Storage</p>
      </div>

      <div class="mt-6 flex items-center justify-center gap-4">
        <NuxtLink
          href="signin"
          class="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >Get started for free</NuxtLink
        >
        <NuxtLink
          href="signup"
          class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
        >
          Sign in
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
