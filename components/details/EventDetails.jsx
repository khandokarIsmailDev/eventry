import React from "react";
import EventVenue from "./EventVenue";

const EventDetails = ({eventInfo}) => {
  return (
    <section className="container">
      <div className="grid grid-cols-5 gap-12 my-12">
        <div className="col-span-3">
          <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
            <h2 className="font-bold text-2xl">Details</h2>
            <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
              <p className>
                {eventInfo?.details}
              </p>
              <ul className>
                <li>🎉 Free Tshirt</li>
                <li>🕹️ Networking</li>
                <li>🎯 Networking</li>
                <li>📌 Free Foods</li>
                <li>🚀 Free Wifi</li>
              </ul>
            </div>
          </div>
        </div>
        <EventVenue/>
      </div>
    </section>
  );
};

export default EventDetails;
