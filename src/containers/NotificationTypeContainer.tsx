import { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import apiClient from "../services/api-client";

interface Props {
  appId: number;
  eventId: number
}

const NotificationTypeContainer = ({ appId, eventId }: Props) => {
  const [notificationsData, setNotificationsData] = useState({
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
    getNotifications();
  }, [appId, eventId]);

  const getNotifications = () => {
    apiClient
      .get(`/notification?event_id=${eventId}`)
      .then((response) => {
        setNotificationsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNotification = (eventInfo: { name: string; description: string; }) => {

    apiClient.post("/event", {...eventInfo, applicationId: appId}).then(() => {
      getNotifications();
    });
  };

  return (
    <>
      <div>
        {notificationsData && (
          <Carousel
            entity="Notifications"
            getItems={getNotifications}
            items={notificationsData}
            onAdd={addNotification}
          />
        )}
      </div>
    </>
  );
};

export default NotificationTypeContainer;
