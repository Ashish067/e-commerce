import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get("/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return { categories, error };
};

export default useCategories;
