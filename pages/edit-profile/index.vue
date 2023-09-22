<template>
  <body>
    <div class="flex h-max justify-center bg-slate-100">
      <div class="m-10 rounded-md bg-slate-300 p-20 text-center">
        <h1 class="text-2xl font-bold">Edit Profile</h1>
        <div class="flex w-fit flex-col space-y-2 p-10">
          <p>Change Profile Picture:</p>
          <input id="img" type="file" name="img" accept="image/*" />
          <button
            class="w-80 rounded-md bg-slate-500 px-2 py-2 text-sm font-medium text-white"
          >
            Update Picture
          </button>
        </div>
        <div class="flex w-fit flex-col space-y-2 p-10">
          <p>Change Email:</p>
          <input
            type="email"
            placeholder="Enter your old email address."
            class="w-80 rounded-md px-2 py-2 text-sm font-medium"
          />
          <input
            type="email"
            placeholder="Enter your new email address."
            class="w-80 rounded-md px-2 py-2 text-sm font-medium"
          />
          <input
            type="email"
            placeholder="Re-Enter your new email address."
            class="w-80 rounded-md px-2 py-2 text-sm font-medium"
          />
          <button
            class="w-80 rounded-md bg-slate-500 px-2 py-2 text-sm font-medium text-white"
          >
            Update Email
          </button>
        </div>
        <div class="flex w-fit flex-col space-y-2 p-10">
          <p>Change Password:</p>
          <input
            type="password"
            placeholder="Enter your old password."
            class="w-80 rounded-md px-2 py-2 text-sm font-medium"
          />
          <input
            type="password"
            placeholder="Enter your new password."
            class="w-80 rounded-md px-2 py-2 text-sm font-medium"
          />
          <input
            type="password"
            placeholder="Re-Enter your new password."
            class="w-80 rounded-md px-2 py-2 text-sm font-medium"
          />
          <button
            class="w-80 rounded-md bg-slate-500 px-2 py-2 text-sm font-medium text-white"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  </body>
</template>
<script setup></script>
