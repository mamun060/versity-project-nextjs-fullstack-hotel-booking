/* eslint-disable import/no-anonymous-default-export */
import { checkRole } from "@/middleware/checkRole";


const handler = async (req, res) => {
    res.status(200).json({ message: "Welcome Admin" });
};
  
export default (req, res) => checkRole(["admin"])(req, res, handler);