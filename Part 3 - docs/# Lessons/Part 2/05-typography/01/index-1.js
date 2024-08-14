/*
  Customizing your theme

    theme: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ...],
        'serif': ['ui-serif', 'Georgia', ...],
        'mono': ['ui-monospace', 'SFMono-Regular', ...],
        'display': ['Oswald', ...],
        'body': ['"Open Sans"', ...],
      }
    }


*****************************

  - Note that Tailwind does not automatically escape font names for you. If you’re using a font that contains an invalid identifier, wrap it in quotes or escape the invalid characters.

    {
      -> Won't work:
      'sans': ['Exo 2', ...],

      -> Add quotes:
      'sans': ['"Exo 2"', ...],

      -> ...or escape the space:
      'sans': ['Exo\\ 2', ...],
    }


*******************************

  - Like any other web project, make sure to include the necessary @font-face or @import rules in your CSS for any custom fonts you’re using so that those fonts are loaded by the browser for your site:

      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(/fonts/Roboto.woff2) format('woff2');
        }
      }





      
*/
