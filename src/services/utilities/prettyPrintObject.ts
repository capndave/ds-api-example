import logger from '../../logger/logger'

export default function prettyPrintObject(obj: any) {
    logger.info(JSON.stringify(obj, undefined, 2))
}