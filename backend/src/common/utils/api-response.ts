import { Response } from "express";

class ApiResponse {
  static ok<T>(
    res: Response,
    message = "Success",
    data?: T
  ) {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  static created<T>(
    res: Response,
    message = "Resource created successfully",
    data?: T
  ) {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  static noContent(res: Response) {
    return res.status(204).send();
  }

  static paginated<T>(
    res: Response,
    message: string,
    data: T,
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    }
  ) {
    return res.status(200).json({
      success: true,
      message,
      data,
      pagination,
    });
  }
}

export default ApiResponse;