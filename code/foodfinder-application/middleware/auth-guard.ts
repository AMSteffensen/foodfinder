import { GraphQLError } from "graphql/error";
import { JWT } from "next-auth/jwt";

interface ParamInterface {
  user_id: string;
  location_id: string;
}
interface ContextInterface {
  token: JWT;
}

export const authGuard = (
  param: ParamInterface,
  context: ContextInterface
): boolean | Error => {
  if (!context || !context.token || !context.token.fdlst_private_userId) {
    return new GraphQLError("User is not authenticated", {
      extensions: {
        http: { status: 401 },
        code: "UNAUTHENTICATED",
      },
    });
  }
  if (context.token.fdlst_private_userId !== param.user_id) {
    return new GraphQLError("User is not authorized", {
      extensions: {
        http: { status: 403 },
        code: "UNAUTHORIZED",
      },
    });
  }
  return true;
};