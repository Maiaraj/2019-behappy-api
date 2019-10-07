import { User } from "../../models";

export default {
  method: ["GET", "POST"],
  path: "/auth",
  options: {
    auth: "simple"
  },
<<<<<<< HEAD
  handler: (request, reply) => request.auth.credentials
=======
  handler: (request, reply) => ({ msg: "logged" })
>>>>>>> c119b435276c4730648b838467f110312288ef7c
};

