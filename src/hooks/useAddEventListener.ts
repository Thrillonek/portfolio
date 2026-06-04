'use client';

import { useEffect } from 'react';

/**
 * Adds an event listener to an element using useEffect, and aborts it when the component unmounts
 * @param eventName Name of the event to listen to
 * @param callback The function that runs each time the event is triggered
 * @param dependencies Array of every immutable variable used inside the function
 * @param options
 * - target - The element that will listen to the event (default: document)
 * - passive - Whether the event listener is passive or not
 */

type Options = {
	target?: HTMLElement | Document | null;
	passive?: boolean;
};
type EventType = keyof DocumentEventMap;

export function useAddEventListener<T = EventType>(eventName: T, callback: (e: any) => void, dependencies: any[] = [], { target, passive }: Options = {}) {
	useEffect(() => {
		const eventController = new AbortController();

		if (target === undefined) target = document;

		if (target) target.addEventListener(eventName as string, callback, { signal: eventController.signal, passive });

		return () => {
			eventController.abort();
		};
	}, dependencies);
}
