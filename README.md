# Project Superloop

The project is built with Vite + ReactJS + Typescript for code assessment.

To run the project, simply do

```
npm i
```

then

```
npm run dev
```

## Key points

- I used `react-select` lib to do the main search and select part. If we shall use normal `<input>`, we will need to create a div to fake the dropdown for options. There are quite some trivial works, so I eventually used this lib. I put some comment in the component to demonstrate what do we do without this particular lib.

* I tried to use Typescript as much and as properly as I can in this small project, but normally we should have more configuration for the project and organise the types well in type files.

- In real world, I will cover at least key functions with unit tests and some basic end-to-end tests.

- I used `throttle` to avoid excessive API calls, in real world, we could also consider cache popular searches to reduce the API call

- I used `styled-component` instead of any UI library for styling, which can reflect some CSS skills. Here, I created a useScreenQuery hook to check the current screen size so I can update the page responsively. I personally like to use the auto layout of `flex`, to avoid changing everything manually.

* I used `vite` just for fun. It's super quick to run, especially work with `pnpm`. `create-react-app` is still used in most cases.
