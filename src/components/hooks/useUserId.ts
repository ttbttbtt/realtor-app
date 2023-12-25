import React, { useState, useEffect } from "react";

export const useUserId = () => {
  const [userId, setUserId] = useState<object | null>(null);

  useEffect(() => {
    const savedUserId = localStorage.getItem("home_search");

    if (savedUserId) {
      setUserId(JSON.parse(savedUserId));
    }
  }, []);
  
  return userId;
};
