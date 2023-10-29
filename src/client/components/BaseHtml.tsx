import * as elements from 'typed-html';

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Conqr</title>
    <script src='/public/htmx.min.js'></script>
    <link href='/public/index.css' rel='stylesheet' >
  </head>
  
  ${children}
</html>
`;

export default BaseHtml;
