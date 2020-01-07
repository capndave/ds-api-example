import path from 'path'

/**
 * Returns the path name of a file in the signatures directory 
 * @function getSignatureFileName
 * @param { number } signatureId
 * @returns { string }
 */
export default function getSignatureFileName(fileId: number): string {
  const signatureDirectory: string = path.join(__dirname, `../../../../signatures`)
  const fileName: string = `signature_${fileId}.jpg`
  return path.join(signatureDirectory, fileName)
}

