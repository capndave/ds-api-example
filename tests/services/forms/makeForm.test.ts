import stream from 'stream'
import Form from '../../../src/services/forms/makeForm'
const templatePath = './src/templates/testTemplate.hbs'
const nonexistantPath = './src/templates/nonexistantTemplate.hbs'

describe('the templatePath parameter', () => {
  it('equals the value passed to class constructor', () => {
    const testForm = new Form(templatePath)
    expect(testForm.templatePath).toBe(templatePath)
  })
})

describe('the pdf method', () => {

  it('resolves to a read stream', async () => {
    const testForm = new Form(templatePath)
    const data = {
      data: 'test'
    }
    const result = await testForm.pdf(data)
    expect(result instanceof stream.Readable).toBe(true)
  })

  it('passes an ENOENT error if an invalid path was fed to class constructor', () => {
    const testForm = new Form(nonexistantPath)
    const data = {
      data: 'test'
    }
    return expect(testForm.pdf(data)).rejects.toMatch(/ENOENT/)
  })

})

describe.only('the html method', () => {

  it('resolves to an html stream', async () => {
    const testForm = new Form(templatePath)
    const data = {
      data: 'test'
    }
    const result = await testForm.html(data)
    expect(result).toMatch('<div>')
  })

  it('passes an ENOENT error if an invalid path was fed to class constructor', () => {
    const testForm = new Form(nonexistantPath)
    const data = {
      data: 'test'
    }
    return expect(testForm.pdf(data)).rejects.toMatch(/ENOENT/)
  })

})