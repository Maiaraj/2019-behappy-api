import Hapi from "@hapi/hapi";
<<<<<<< HEAD
import { User, Token } from "./models";
=======
import { User } from "./models";
>>>>>>> c119b435276c4730648b838467f110312288ef7c

const server = new Hapi.Server({
  port: process.env.PORT || 8000,
  debug: { request: ["*"] }
});

<<<<<<< HEAD
const basic_validate = async (request, username, password) => {
=======
const validate = async (request, username, password) => {
>>>>>>> c119b435276c4730648b838467f110312288ef7c
  const user = await User.login(username, password);

  if (user == undefined) {
    return { credentials: null, isValid: false };
  }
<<<<<<< HEAD
  const token = Token.add(user);
  return {
    credentials: { id: user.oid, username: user.login, token: token },
    isValid: true
  };
};

const token_validate = async (user, request) => {
  token = Token.findByUser(user);
  if (token == undefined) {
    return { credentials: null, isValid: false };
  } else {
    const credentials = { id: user.id, name: user.name, token: token };
    return { credentials, isValid: true };
  }
};

const init = async () => {
  await server.register([require("@hapi/basic"), require("hapi-auth-jwt2")]);
  server.auth.strategy("simple", "basic", { validate: basic_validate });
  server.auth.strategy("token", "jwt", {
    key: Token.secret,
    validate: token_validate,
    verifyOptions: { algorithms: ["HS256"] }
  });
=======
  return { credentials: { id: user.oid, username: user.login }, isValid: true };
};

const init = async () => {
  await server.register([
    {
      plugin: require("@hapi/basic")
    }
  ]);
  server.auth.strategy("simple", "basic", { validate });
>>>>>>> c119b435276c4730648b838467f110312288ef7c

  await server.register({
    plugin: require("hapi-router"),
    options: {
      routes: "src/routes/**/*.js"
    }
  });

  await server.start();
  console.log("Server is running");
  console.log(server.info);
};

init();

