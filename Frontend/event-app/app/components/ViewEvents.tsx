"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Event {
  EventID: number;
  EventName: string;
  EventDetails: string;
  EventDate: string;
  EventTime: string;
  EventLocation: string;
  EventDescription: string;
  UserID: number;
}

function ViewEvents() {
  const router = useRouter();
  const [events, setEvent] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/events/");
        setEvent(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const updateEvent = (e: any, EventID: number) => {
    e.preventDefault();
    router.push(`/update-event/${EventID}`);
  };

  // const handleDelete = async (EventID: number) => {
  //   console.log(EventID);
  //   try {
  //     await axios.delete(`http://localhost:8800/api/events/${EventID}`);
  //     router.push("/view-event");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className="relative max-w-6xl overflow-hidden">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Event ID
            </th>
            <th scope="col" className="px-6 py-3">
              Event Name
            </th>
            <th scope="col" className="px-6 py-3">
              Event Details
            </th>
            <th scope="col" className="px-6 py-3">
              Event Date
            </th>
            <th scope="col" className="px-6 py-3">
              Event Time
            </th>
            <th scope="col" className="px-6 py-3">
              Event Location
            </th>
            <th scope="col" className="px-6 py-3">
              Event Description
            </th>
            <th scope="col" className="px-6 py-3">
              User ID
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {events &&
            events.map((event) => (
              <tr
                key={event.EventID}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 text-white">{event.EventID}</td>
                <td className="px-6 py-4">{event.EventName}</td>
                <td className="px-6 py-4">{event.EventDetails}</td>
                <td className="px-6 py-4">{event.EventDate}</td>
                <td className="px-6 py-4">{event.EventTime}</td>
                <td className="px-6 py-4">{event.EventLocation}</td>
                <td className="px-6 py-4">{event.EventDescription}</td>
                <td className="px-6 py-4">{event.UserID}</td>

                <td>
                  <div className="flex space-x-2 px-2">
                    {/* <button
                      onClick={() => handleDelete(event.EventID)}
                      className="bg-gray-500 text-white px-2 py-1 rounded-md hover:opacity-80"
                    >
                      Delete
                    </button> */}
                    <button
                      onClick={(e) => updateEvent(e, event.EventID)}
                      className="bg-gray-500 text-white px-2 py-1 rounded-md hover:opacity-80"
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEvents;
