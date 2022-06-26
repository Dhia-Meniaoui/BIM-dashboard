import { User } from './user.model'
import { House } from './House'


export interface Offer {
  Description: String
  House: House
  owner: User
  id: String
}
