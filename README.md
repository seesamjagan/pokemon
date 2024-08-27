## This Monorepo is build on the following tech stack

#### Build Tools
1. NodeJS v20.15.1
1. Npm v10.7.0
1. Nx v19.6.2
1. Lerna v8.1.8
1. Rollup v4.20.0
1. @rollup/plugin-babel v6.0.4
1. and more plugins

#### Library & frameworks
1. ReactJS v18.3.1
1. Storybook v8.2.8
1. NextJS v14.2.6
1. @mui/material v5.16.7
1. @mui/x-data-grid v7.14.0
1. @reduxjs/toolkit v2.2.0
1. react-redux v9.1.0

To start, run the following steps

### Step #1: Clone the repo

```
git clone https://github.com/seesamjagan/pokemon.git
```

### Step #2: Get into the project

```
cd pokemon
```

### Step #3: Install the dependency

```
npm install
```

### Step #4: Build all the project

```
npm run build
```

the above command will build the `utilities` library, `components` library and the `pokemon` nextjs app.

if you want to run the individual projects in dev mode, use one of the following  commands,

### run the `pokemon` project in the dev mode.
```
npm run dev:pokemon
```
and then visit `http://localhost:3000` to see the app in browser.

### run the `storybook` of `components` library
```
npm run storybook
```
this will launch the storybook @ `http://localhost:6006`

### run the `utilities` project in the dev mode.
```
npm run dev:utilities
```
this command will compile the `utilities` project and put the project in watch mode to auto compile when its file got modified.

## TODO
1. docker setup
1. unit test setup