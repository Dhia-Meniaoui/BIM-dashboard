import { Offer } from './offer.model'


export interface Buy {
  cost: String
  approved: String
  pending: String
  offer: Offer
  id: String
}
