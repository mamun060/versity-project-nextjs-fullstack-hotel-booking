import { getSession } from "next-auth/react";

export const checkRole = (roles) => {
  return async (req, res, next) => {
    const session = await getSession({ req });
    if (!session || !roles.includes(session.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
