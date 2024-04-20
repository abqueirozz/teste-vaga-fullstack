import { useEffect } from "react";
import { TransictionError } from "../../@types/api/TransactionsError";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
interface useErrorHandler {
  isError: boolean;
  error: AxiosError<TransictionError> | null | Error;
}

export const useErrorHandler = (
  error: useErrorHandler["error"],
  isError: useErrorHandler["isError"]
) => {
  const navigate = useNavigate();
  useEffect(() => {
    let errorMessage = "Error";
    if (isError && error) {
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data["detail"];
      }
      navigate("/Error");
      toast.error(errorMessage);
    }
  }, [isError, error, navigate]);
};
