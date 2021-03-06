const sitemap = require('nextjs-sitemap-generator');  

sitemap({
  baseUrl: 'https://brunowebdev.com',  
  ignoredPaths: ['admin'],
  pagesDirectory: __dirname + "\\pages",  
  targetDirectory : 'public/',
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [
        'png',
        'jpg'
  ]
});