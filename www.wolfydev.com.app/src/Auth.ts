import { User } from "./models";
import * as _ from "lodash";
export default async function validate(decoded, request) {
  const {_id} = decoded;
  let usr = await new User({staff_id: _id}).fetch();
  return {isValid: !_.isNull(usr) && !_.isUndefined(usr)};
}