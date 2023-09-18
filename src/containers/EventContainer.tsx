import { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import apiClient from "../services/api-client";

interface Props {
  appId: number;
}

const EventContainer = ({ appId }: Props) => {
  const [eventsData, setEventsData] = useState({
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
    getEvents();
  }, [appId]);

  const getEvents = () => {
    apiClient
      .get(`/event?application_id=${appId}`)
      .then((response) => {
        setEventsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addEvent = (eventInfo: { name: string; description: string }) => {
    apiClient.post("/event", eventInfo).then(() => {
      getEvents();
    });
  };

  return (
    <>
      <div>
        {eventsData && (
          <Carousel
            entity="Events"
            getItems={getEvents}
            items={eventsData}
            onAdd={addEvent}
          />
        )}
      </div>
    </>
  );
};

export default EventContainer;
