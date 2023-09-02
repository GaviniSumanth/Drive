<template>
    <div class="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div class="h-max mx-auto flex flex-col items-center">
            <Logo class="h-20 w-20" />
            <h1 class="text-xl font-bold text-center pb-10">Sign in to your account</h1>
            <form class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm" @submit.prevent="loginHandler">
                <div>
                    <label class="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
                    <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="email" name="email" v-model="email" placeholder="name@example.com" required>
                </div>
                <div>
                    <label class="text-gray-600 font-bold inline-block pb-2" for="password">Password</label>
                    <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                        type="password" name="password" v-model="password" placeholder="********" required>
                </div>
                <NuxtLink class="font-bold text-blue-600" to="/">Forgot password ?</NuxtLink>
                <div>
                    <input
                        class="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
                        type="submit" value="Login">
                </div>
            </form>
            <p class="text-sm text-gray-500 mt-10">Not a member? <NuxtLink to="signup" class="text-[#4F46E5] font-bold">Sign
                    Up</NuxtLink>
            </p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    watch: {
        email(value) {
            if (this.validateEmail(value))
                this.email = value;
        },
        password(value) {
            if (this.validatePassword(value))
                this.password = value;
        }
    },
    methods: {
        validateEmail(value) {
            console.log(value);
            return true;
        },
        validatePassword(value) {
            console.log(value);
            return true;
        },
        loginHandler() {
            alert(`Email: ${this.email} Password: ${this.password}`)
        }
    }
}
</script>