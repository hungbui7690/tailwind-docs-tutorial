/*
  *** Create An Environment With Tailwind CLI 
  - PIC: install-tailwind-cli
    > https://tailwindcss.com/docs/installation

  (1) npm init -y
  (2) npm install -D tailwindcss
  (2) npx tailwindcss init >> tạo tailwind.config.js file
  (4) tạo input.css (nhớ install PostCSS Extension)

//////////////////////////////////////////////////////////

  (5) npx tailwindcss -i ./input.css -o ./css/output.css --watch
  > nếu ko muốn chạy npx tailwindcss -i ... ở mỗi lần thì dùng cách dưới đây 

  (5a) setup build command trong package.json:
    "build": "tailwindcss -i ./input.css -o ./css/style.css",
    "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch"
      > "npm run build" hoặc "npm run watch"

  (6) vào file html vào link tới css/style.css



*/
