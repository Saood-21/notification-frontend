import { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import apiClient from "../services/api-client";

const AppContainer = () => {
  const [appsData, setAppsData] = useState({
    pageNumber: 0,
    pageSize: 0,
    count: 0,
    data: [],
  });

  useEffect(() => {
    localStorage.setItem(
      "x-auth-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2Fvb2QiLCJpYXQiOjE2OTUwMTczMjh9.z42kggPTTk3yuBB38mj8blqfABECUyDUqxsEgcneBeQ"
    );
    getApps();
  }, []);

  const getApps = () => {
    apiClient
      .get("/application")
      .then((response) => {
        setAppsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addApp = (appInfo: { name: string; description: string }) => {
    apiClient.post("/application", appInfo).then(() => {
      getApps();
    });
  };

  return (
    <>
      <div>{appsData && <Carousel apps={appsData} onAdd={addApp} />}</div>
    </>
  );
};

export default AppContainer;
