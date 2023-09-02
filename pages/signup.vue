<template>
  <div class="bg-[#F9FAFB] h-screen w-screen flex items-center">
    <div class="h-max mx-auto flex flex-col items-center">
      <Logo class="h-20 w-20" />
      <h1 class="text-xl font-bold text-center pb-10">Sign Up</h1>
      <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
        <div>
          <label class="text-gray-600 font-bold inline-block pb-2" for="name"
            >Name</label
          >
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="text"
            name="name"
            placeholder="Sumanth Gavini"
            required
          />
        </div>
        <div>
          <label class="text-gray-600 font-bold inline-block pb-2" for="email"
            >Email</label
          >
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="email"
            name="email"
            placeholder="sumanth@gmail.com"
            required
          />
        </div>
        <div>
          <label
            class="text-gray-600 font-bold inline-block pb-2"
            for="password"
            >Password</label
          >
          <input
            class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        <div>
          <input
            class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
            type="submit"
            value="Login"
          />
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-10">
        Already a member?
        <NuxtLink to="signin" class="text-[#4F46E5] font-bold">
          Sign In</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
