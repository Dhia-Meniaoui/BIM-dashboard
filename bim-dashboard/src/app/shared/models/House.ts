import { User } from './user.model'
import { Lodging } from './lodging'


export interface House {
  Description: String
  Lodging: Lodging
  room: String
  efficiency_class: String
  basement: String
  fitted_kitchen: String
  terrasse: String
  equipment: String
  id: String
  
}
