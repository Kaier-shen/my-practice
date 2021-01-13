const { compileTemplate } = require('@vue/component-compiler-utils')
const compiler = require('vue-template-compiler')

function stripScript (){
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

function stripStyle (){
  const result = content.match(/<(style)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

