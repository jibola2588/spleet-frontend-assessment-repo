import { serviceInstance } from "@/config/requestHandler";

const eventService = {
    getAllEvents: () =>
      serviceInstance
        .get(`/events`)
        .then(({ data, status }) => ({
          ...data,
          status,
        })),
    getSingleEvent: (id) =>
      serviceInstance
        .get(`/events/${id}`)
        .then(({ data, status }) => ({
          ...data,
          status,
        })),
    searchEvent: (category) =>
      serviceInstance
        .get(`/events/search?${category}`)
        .then(({ data, status }) => ({
          ...data,
          status,
        })),
    }

export default eventService