import * as Babel from 'babel-standalone'

export default code => {
  try {
    return Babel.transform(code, {
      presets: ['react', 'stage-0'],
    }).code
  } catch (e) {
    console.log(e)
    return code
  }
}