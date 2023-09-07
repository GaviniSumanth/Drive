<template>
  <div class="flex h-screen w-screen items-center bg-[#F9FAFB]">
    <div class="mx-auto flex h-max flex-col items-center">
      <Logo class="h-20 w-20" />
      <h1 class="pb-10 text-center text-xl font-bold">Sign Up</h1>
      <form
        class="flex flex-col gap-4 bg-white p-10 text-sm shadow-xl"
        @submit.prevent="signupHandler"
      >
        <div>
          <label class="inline-block pb-2 font-bold text-gray-600" for="name"
            >Name</label
          >
          <input
            v-model="name"
            class="w-full rounded-md border border-gray-400 px-5 py-2 shadow-sm focus:outline-slate-400"
            type="text"
            name="name"
            placeholder="Sumanth Gavini"
            required
          />
        </div>
        <div>
          <label class="inline-block pb-2 font-bold text-gray-600" for="email"
            >Email</label
          >
          <input
            v-model="email"
            class="w-full rounded-md border border-gray-400 px-5 py-2 shadow-sm focus:outline-slate-400"
            type="email"
            name="email"
            placeholder="sumanth@gmail.com"
            required
          />
        </div>
        <div>
          <label
            class="inline-block pb-2 font-bold text-gray-600"
            for="password"
            >Password</label
          >
          <input
            v-model="password"
            class="w-full rounded-md border border-gray-400 px-5 py-2 shadow-sm focus:outline-slate-400"
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        <div>
          <input
            class="w-full cursor-pointer rounded-md bg-[#4F46E5] py-2 font-bold text-white hover:bg-[#181196]"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
      <p class="mt-10 text-sm text-gray-500">
        Already have an account?
        <NuxtLink to="signin" class="font-bold text-[#4F46E5]">
          Sign In</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script>
import API from '~/utils/api'
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  watch: {
    name(value) {
      if (value.length >= 3) this.name = value
    },
    email(value) {
      if (this.validateEmail(value)) this.email = value
    },
    password(value) {
      if (this.validatePassword(value)) this.password = value
    }
  },
  methods: {
    validateEmail(value) {
      const re = /\S+@\S+\.\S+/
      return re.test(value)
    },
    validatePassword(value) {
      return value.length >= 8
    },
    async signupHandler() {
      await useFetch(API.SIGN_UP, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' // Required for CORS support to work
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password
        })
      })
      await navigateTo({ path: '/signin' })
    }
  }
}
</script>
