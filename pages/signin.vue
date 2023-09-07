<template>
  <div class="flex h-screen w-screen items-center bg-[#F9FAFB]">
    <div class="mx-auto flex h-max flex-col items-center">
      <Logo class="h-20 w-20" />
      <h1 class="pb-10 text-center text-xl font-bold">
        Sign in to your account
      </h1>
      <form
        class="flex flex-col gap-4 bg-white p-10 text-sm shadow-xl"
        @submit.prevent="loginHandler"
      >
        <div>
          <label class="inline-block pb-2 font-bold text-gray-600" for="email"
            >Email</label
          >
          <input
            v-model="email"
            class="w-full rounded-md border border-gray-400 px-5 py-2 shadow-sm focus:outline-slate-400"
            type="email"
            name="email"
            placeholder="name@example.com"
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
        <NuxtLink class="font-bold text-blue-600" to="/"
          >Forgot password ?</NuxtLink
        >
        <div>
          <input
            class="w-full cursor-pointer rounded-md bg-[#4F46E5] py-2 font-bold text-white hover:bg-[#181196]"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p class="mt-10 text-sm text-gray-500">
        Don't have one? Create
        <NuxtLink to="signup" class="font-bold text-[#4F46E5]"
          >Account</NuxtLink
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
      email: '',
      password: ''
    }
  },
  watch: {
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
    async loginHandler() {
      const { data: response } = await useFetch(API.SIGN_IN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' // Required for CORS support to work
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
      document.cookie = 'token=' + response._rawValue.token + ';'
      await navigateTo({ path: '/home' })
    }
  }
}
</script>
