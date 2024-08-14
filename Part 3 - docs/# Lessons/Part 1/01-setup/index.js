/*
  Setup

**********************************
  1.
  ~~ npm install -D tailwindcss
  ~~ npx tailwindcss init

  - tailwind.config.js
    -> copy from tailwind docs
    -> path must be correct -> content: ["./*.{html,js}"]


**********************************

  2. input.css
    -> add directives


**********************************
  
  3. npx tailwindcss -i ./input.css -o ./output.css --watch

  4. index.html 
    -> <link href="./output.css" rel="stylesheet">


*****************************

  Sort Classes
  ~~ npm install -D prettier prettier-plugin-tailwindcss

  { "plugins": ["prettier-plugin-tailwindcss"] }


*****************************

  Optimizing for Production
  - https://tailwindcss.com/docs/optimizing-for-production

  - For the smallest possible production build, we recommend minifying your CSS with a tool like <cssnano>, and compressing your CSS with <Brotli>.
  - If you’re using Tailwind CLI, you can minify your CSS by adding the --minify flag:
    -> npx tailwindcss -o build.css --minify


*/
