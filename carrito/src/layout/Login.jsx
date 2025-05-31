import React from "react";

export default function Login() {
  return (
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white border-gray-200 border md:mt-0 sm:max-w-md xl:p-0 text-black">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl text-gray-900 font-bold leading-tight md:text-2xl">
            Inicia sesión con tu cuenta
          </h1>
          <form class="space-y-4 md:space-y-6" action="POST">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="placeholder-gray-400 bg-gray-50 border border-gray-300 block w-full p-3"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="placeholder-gray-400 bg-gray-50 border border-gray-300 block w-full p-3"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="remember"
                    class="text-gray-400"
                  >
                    Recordar
                  </label>
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-slate-900 hover:underline"
              >
                Olvidaste tu contraseña?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-black hover:bg-neutral-900 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500">
              Aún no tienes una cuenta?{" "}
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
