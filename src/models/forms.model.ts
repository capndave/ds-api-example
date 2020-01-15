export class FormData {
  prop_id: number
  prop_val_yr: number

  constructor(input: any) {
    this.prop_id = input.propId
    this.prop_val_yr = input.prop_val_yr
  }
}
