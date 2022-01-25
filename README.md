# 浑水

## **预览** [国际](https://www.jixiaokang.com/os/#/)
## **预览** [国内](https://os-ten.vercel.app/#/)
## **预览** [国内备用加速](https://static-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec.bspapp.com/#/)


- 请尝试下面的账号

```
Email Address: test@qq.com
Password: 123456
```

## Steps

- [浑水](#浑水)
  - [**预览** 国际](#预览-国际)
  - [**预览** 国内](#预览-国内)
  - [**预览** 国内备用加速](#预览-国内备用加速)
  - [Steps](#steps)
    - [页面](#页面)
      - [winXP](#winxp)
      - [win7](#win7)
      - [win8](#win8)
      - [win11](#win11)
      - [deepin](#deepin)
    - [最先进](#最先进)
    - [快速开始](#快速开始)
      - [Helpers](#helpers)
      - [Theme](#theme)
      - [Font Awesome](#font-awesome)

### 页面

#### winXP
#### win7
#### win8
#### win11
#### deepin

### 最先进

1. [Vue 3](https://v3.vuejs.org/)
1. [Firebase v9](https://firebase.google.com/docs/web/modular-upgrade)
1. [Tailwind CSS v3](https://tailwindcss.com/)
1. [Font Awesome](https://github.com/FortAwesome/vue-fontawesome)
1. [Headless UI](https://headlessui.dev/)
1. [Vite](https://vitejs.dev/guide/)


### 快速开始

```bash
git clone https://github.com/xkloveme/os
yarn
```

> Make sure you replace **my-project** with your own project name

<details><summary>If you don't have yarn installed</summary>
<p>

```bash
npm i
```

> Remove **yarn.lock** as you will already have **package.lock**

</p>
</details>

1. Go to Firebase console. Add Project. In project overview, click on the web icon and register the app. You will see `firebaseConfig object`, We will require its details further. Click on Authetication, then on set up sign-in method. Enable `Email/password authentication` & `google authentication`.
1. Create a `.env.local` file in your project's root. Example of `.env.local` file is given below. Make sure you replace `YOUR_FIREBASE_CONSOLE_DETAILS` with your `firebaseConfig object` details.

```
VITE_APP_API_KEY=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_AUTH_DOMAIN=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_DATABASE_URL=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_PROJECT_ID=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_STORAGE_BUCKET=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_MESSAGING_SENDER_ID=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_APP_ID=YOUR_FIREBASE_CONSOLE_DETAILS
```

3. That's It ! Finally run the application

```
yarn dev # OR npm run dev
```


#### Helpers

- Class suffixed with `t-` will be found `/src/assets/index.css`, they are basically global styles
  > Some basic html elements and classes are already configured check out, `/src/assets/index.css`
- `useAuthState` in `/src/firebase.js` returns `{ user, error, isAuthenticated }`
- `useSignOut` in `/src/firebase.js` - Signs Out User
- `getUserState` in `/src/firebase.js` - Returns promise
- `isValidEmail` `/src/helpers/isValidEmail.js` function returns true if email is valid
- `Loading` in `/src/components/Loading.vue` - Loading spinner
- `Dialog` in `/src/components/Dialog.vue` - Headless UI dialog

#### Theme

- Font - `Ubuntu (font-text)` & `Goldman (font-heading)`
- Primary Color - Tailwind - `colors.sky["500"]`
- Secondary Color - Tailwind - `colors.slate["700"]`
- Background Color - index.css - `#22272e`
- Error Color - Tailwind - `colors.red["500"]`

#### Font Awesome

- Go [here](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free)
- Select any icon, suppose you want to use `<i class="fas fa-address-book"></i>` then import `faAddressBook` in `/src/main.js`
- Add it to `library`. (See in `main.js`)
- Use it like `<font-awesome-icon :icon="['fas', 'address-book']" />`
- For more info visit [here](https://github.com/FortAwesome/vue-fontawesome)
