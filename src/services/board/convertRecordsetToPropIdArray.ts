import logger from '../../logger/logger'
import { IPropId } from '../../interfaces'

/**
 * Get the prop id's in a panel from the database.
 * @function convertRecordsetToPropIdArray
 */
export default function convertRecordsetToPropIdArray(
  recordset: IPropId[]
): number[] {
    return recordset.map(record => record.prop_id)
}
