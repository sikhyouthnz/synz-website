'use client'
import { Component } from 'react'
import { attributes, react as HomeContent } from '../../../content/events.md'

export default class Home extends Component {
    render() {
        let { title, events } = attributes
        return (
            <div className='flex flex-col gap-3 mx-4 md:mx-36 lg:mx-48 my-5'>
                <div className='text-3xl'>{title}</div>
                <div className='flex gap-5 my-12'>
                    {events.map((event, k) => (
                        <a key={k} href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{event.name}</h5>
                            <p class="font-medium text-gray-500">Date: {(new Date(Date.parse(event.date))).toLocaleString()}</p>
                            <p class="font-medium text-gray-500">Venue: {event.venue}</p>
                            <p class="font-normal text-gray-700">{event.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
}