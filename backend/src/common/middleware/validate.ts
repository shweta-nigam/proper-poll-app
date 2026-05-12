
import {
  NextFunction,
  Request,
  Response,
} from "express";

import { ZodObject } from "zod";

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
      next(error);
    }
  };

export default validate;