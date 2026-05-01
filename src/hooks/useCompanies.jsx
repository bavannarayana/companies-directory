import { useEffect, useState } from "react";

export default function useCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCompanies = async () => {
    try {
      setError("");

      const res = await fetch("/companies.json");

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();
      setCompanies(data);
    } catch {
      setError("Unable to load companies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      try {
        const res = await fetch("/companies.json");

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();

        if (!ignore) {
          setCompanies(data);
        }
      } catch {
        if (!ignore) {
          setError("Unable to load companies.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    companies,
    loading,
    error,
    refetch: () => {
      setLoading(true);
      fetchCompanies();
    },
  };
}
