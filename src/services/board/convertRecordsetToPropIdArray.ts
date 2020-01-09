import logger from '../../logger/logger'
import { PropId } from '../../models/board/boardMember.model'

/**
 * Get the prop id's in a panel from the database.
 * @function convertRecordsetToPropIdArray
 */
export default function convertRecordsetToPropIdArray(
  recordset: PropId[]
): number[] {
    return recordset.map(record => record.prop_id)
}
