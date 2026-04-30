import { useEffect, useState } from "react";

export default function useCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/companies.json");

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setCompanies(data);
    } catch (err) {
      setError("Unable to load companies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return {
    companies,
    loading,
    error,
    refetch: fetchCompanies,
  };
}
