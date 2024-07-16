import PreapprovalPlan from "../../models/PreapprovalPlan"

export interface CostumerOutput { 
  name: string
  email: string
  preapprovalPlan?: PreapprovalPlan
}