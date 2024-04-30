import EventDetails from '@/components/details/EventDetails';
import HeroSection from '@/components/details/HeroSection';
import React from 'react';
import { getEventById } from '@/db/query';

const EventDetailPage = async ({params:{id}}) => {
    let eventInfo = await getEventById(id)
    console.log(eventInfo)
    return (
        <main>
            <HeroSection eventInfo={eventInfo}/>
            <EventDetails eventInfo={eventInfo}/>
        </main>
    );
};

export default EventDetailPage;