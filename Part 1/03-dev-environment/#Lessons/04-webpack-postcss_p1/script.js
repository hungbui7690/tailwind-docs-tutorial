/*
  (1) install tailwind-cli
    > npm install -D tailwindcss
    > npx tailwindcss init

  (2) cài mấy thằng khác 
    > npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader postcss postcss-loader postcss-preset-env

  (3) setup build cmd trong package.json
    > "build": "webpack"

  (3) tạo webpack.config
    
  (4) tạo src/index.js >> webpack sẽ watch folder này 

  (5) chạy "npm run build" sẽ tạo ra file trong dist/ 

  (6) tạo /dist/index.html >>  link tới file mới tạo
    > start live server

  (7) src/index.js 
    > sau khi viết trong đây xong phải chạy "npm run build" để compile lại
    >> bài sau sẽ setup webpack dev server
*/
