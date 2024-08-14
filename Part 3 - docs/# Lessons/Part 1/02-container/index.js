/*
  Center a container by default
  - tailwind.config.js

      theme: {
        container: {
          center: true,
        },
      },


*******************************

  - Add horizontal padding by default

      theme: {
        container: {
          padding: '2rem',
        },
      },


*******************************

  - If you want to specify a different padding amount for each breakpoint, use an object to provide a default value and any breakpoint-specific overrides:

      theme: {
          container: {
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
            },
          },
        },


*/
