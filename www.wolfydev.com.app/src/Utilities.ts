import * as jwt from "jsonwebtoken";
import { getServerConfig } from './Config';

export default class Utilities{
  public static generateToken(usr: any){
    let secretKey = process.env.JWT || getServerConfig().jwtSecret;
    let expiresIn = process.env.JWT_EXPIRES_IN || getServerConfig().jwtExpiration;
    return jwt.sign({
      _id : usr.get("staff_id"),
      userName: usr.get("username"),
      lastName: `${usr.get("first_name")} ${usr.get("last_name")}`
    },
    secretKey, {algorithm: 'HS256', expiresIn: expiresIn}
  );}
}