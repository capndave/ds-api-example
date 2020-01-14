import htmlPdf from 'html-pdf-chrome'
import handlebars from 'handlebars'
import { readFile } from 'fs'
import { basename } from 'path'
const communicationAffidavitTemplate =
  '../../templates/communicationAffidavitTemplate.hbs'

const fileName = basename(__filename)

/**
 * Class constructor used to generate form data in streaming pdf format
 * @constructor
 * @param {string} templatePath
 */

class Form {
  templatePath: string

  constructor(templatePath: string) {
    this.templatePath = templatePath
  }

  /**
   * Reads file given a path, returns a promise
   * @private
   * @method
   * @param {string} filePath - a path to a file
   * @returns {Promise} Promise object with file contents
   */

  private getFile = function(filePath: string) {
    return new Promise((resolve, reject) => {
      readFile(filePath, { encoding: 'utf-8' }, (error, data) => {
        if (error) reject(`${fileName} [35]: ${error}`)
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

  private compile = function(template: string) {
    return handlebars.compile(template)
  }

  /**
   * Converts html template to pdf data stream
   * @private
   * @method
   * @param {string} html - an html template
   * @returns {stream.Readable} - A readable stream of pdf data
   */

  private getPdfStreamFromHtml = async function(html: string) {
    try {
      const options = ((htmlPdf as any).CreateOptions = {
        port: 9222,
        host: process.env.CHROME_SERVER
      })
      const pdf = await htmlPdf.create(html, options)
      return pdf.toStream()
    } catch (error) {
      throw `${fileName} [70]: ${error}`
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

  public generate = async function(data: any) {
    try {
      if (!data) {
        throw new Error('Data is missing')
      }

      const template = await this.getFile(this.templatePath)
      const injectDataIntoTemplate = this.compile(template)
      const templateWithDataInserted = injectDataIntoTemplate(data)
      return await this.getPdfStreamFromHtml(templateWithDataInserted)
    } catch (e) {
      throw e
    }
  }
}

export default Form
export const CommunicationAffidavit = new Form(communicationAffidavitTemplate)
