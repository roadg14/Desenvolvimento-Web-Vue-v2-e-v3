// Configurando o Webpack.
// Quando for usado npm run serve a port 3000 ou invés do 8080.
module.exports = {
  devServer: {
    port: 3000
  },
  // Quando for feito o npm run build pode muda quando for feito e coloca para outro destino.
  // Criou uma pasta para coloca o build.
  outputDir: 'BuildPersonalizado'
}
// Configurando o Webpack.
//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: true
//})
