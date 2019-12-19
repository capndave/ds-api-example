const htmlPdf = require('html-pdf-chrome')
const handlebars = require('handlebars')
const { readFile } = require('fs')
const decisionSheetHTML = require('../../templates/decisionSheet')
const communicationAffidavit = require('../../templates/communicationAffidavit')
const logger = require('../../logger/logger')

/**
 * Class constructor used to generate form data in streaming pdf format 
 * @constructor
 * @param {string} templatePath
 */

function Form(templatePath) {

  /**
   * Path to a template, passed in to class
   * @public
   * @type {string}
   */

  this.templatePath = templatePath

  /**
   * Reads file given a path, returns a promise
   * @private
   * @method
   * @param {string} filePath - a path to a file
   * @returns {Promise} Promise object with file contents
   */

  getFile = function(filePath) {
    return new Promise((resolve, reject) => {
      readFile(filePath, { encoding: 'utf-8' }, (error, data) => {
        if (error)
          reject(`[generatePdf.js line 36] Unable to get file: ${error}`)
        resolve(data)
      })
    })
  }

  /**
   * Compiles an html template with handlebars
   * @private
   * @method
   * @param {string} template - an html template
   * @returns {function} - a handlebars function initialized with html template
   */

  compile = function(template) {
    return handlebars.compile(template)
  }

  /**
   * Converts html template to pdf data stream
   * @private
   * @method
   * @param {string} html - an html template
   * @returns {stream.Readable} - A readable stream of pdf data
   */

  getPdfStreamFromHtml = async function(html) {
    try {
      const options = (htmlPdf.CreateOptions = {
        port: 9222,
        host: '10.27.220.252'
      })
      const pdf = await htmlPdf.create(html, options)
      return pdf.toStream()
    } catch (error) {
      throw `[generatePdf.js: 71] Unable to generate pdf: ${error}`
    }
  }

  /**
   * Pulls together other methods in this class to get, compile, and return data
   * stream from an html template
   * @public
   * @async
   * @method
   * @param {object} data - JSON-formatted data object
   * @returns {stream.Readable} - A readable stream of pdf data
   */

  this.generate = async function(data) {
    try {
      if (!data) {
        throw new Error('Data is missing')
      }

      const template = await getFile(this.templatePath)
      const injectDataIntoTemplate = compile(template)
      const templateWithDataInserted = injectDataIntoTemplate(data)
      return await getPdfStreamFromHtml(templateWithDataInserted)

    } catch (e) {
      throw e
    }

  }
}

module.exports = {
  Form,
  CommunicationAffidavit: new Form(
    './src/templates/communicationAffidavit.hbs'
  ),
  DecisionSheet: new Form('./src/templates/decisionSheet.hbs')
}
