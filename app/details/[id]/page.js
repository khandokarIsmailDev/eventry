import EventDetails from '@/components/details/EventDetails';
import HeroSection from '@/components/details/HeroSection';
import React from 'react';
import { getEventById } from '@/db/query';

const EventDetailPage = async ({params:{id}}) => {
    let eventInfo = await getEventById(id)
    // console.log(eventInfo)
    return (
        <main>
            <HeroSection eventInfo={eventInfo}/>
            <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} location={eventInfo?.location}/>
        </main>
    );
};

export default EventDetailPage;