import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_BASE_URL;

// 목록 조회 훅
export function useVillagers() {
  const [data, setData] = useState([]);       
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVillagers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/api/villagers`);
        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();

        const mapped = (result ?? []).map((v) => ({
          villagerNo: v.villagerNo,
          villagerName: v.villagerName,
          villagerImageIcon: v.villagerImageIcon
        }));

        setData(mapped);
      } catch (err) {
        setError(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVillagers();
  }, []);

  return { data, loading, error };
}

//  상세 조회 훅
export function useVillagerDetail(villagerNo, enabled = true) {
  const [data, setData] = useState(null);     
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled || !villagerNo) return;

    const fetchDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/api/villagers/${villagerNo}`);
        if (!response.ok) throw new Error('Network response was not ok');

        const v = await response.json();
        setData(v);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [villagerNo, enabled]);

  return { data, loading, error };
}
