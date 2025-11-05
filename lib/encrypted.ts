// Save as crypto_aes.js and run with node crypto_aes.js (Node 14+)
import {randomBytes,createCipheriv,createDecipheriv} from "crypto"

const ALGO = 'aes-256-gcm';
const KEY_LEN = 32; // 256-bit
const IV_LEN = 12;  // recommended for GCM

 
const SECRET_KEY = Buffer.from("1fccc51b7fce4b2aacaf2ab47666e7ddb45b863f067f40918c5d519e923860cc","hex")

export function encryptData(data:any) {
  const iv = randomBytes(IV_LEN);
  const cipher = createCipheriv(ALGO, SECRET_KEY, iv);

  const json = JSON.stringify(data); // <-- important
  const encrypted = Buffer.concat([
    cipher.update(json, "utf8"),
    cipher.final()
  ]);

  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, encrypted]).toString("base64");
}
export function decryptData(token:any) {
  const buffer = Buffer.from(token, "base64");
 

  const iv = buffer.slice(0, IV_LEN);
  const tag = buffer.slice(IV_LEN, IV_LEN + 16);
  const encrypted = buffer.slice(IV_LEN + 16);

  const decipher = createDecipheriv(ALGO, SECRET_KEY, iv);
  decipher.setAuthTag(tag);

  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final()
  ]);

  return JSON.parse(decrypted.toString("utf8")); // <-- converts string → object
}
