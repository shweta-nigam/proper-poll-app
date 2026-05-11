import { NextFunction, Request, Response } from "express";
import { z,ZodObject, ZodError } from "zod";

import ApiError from "../../common/utils/api-error.js";

const validate =
  (schema: ZodObject) =>
  async (
    req: Request,
    _res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(
          ApiError.badRequest(
            "Validation failed",
           z.treeifyError(error)
          )
        );

        return;
      }

      next(error);
    }
  };

export default validate;