import { RefObject, useEffect, useState } from 'react';

export function useAddObserver(ref: RefObject<HTMLElement | null>, updateNotIntersecting = false, threshold = 1) {
	const [isObserving, setIsObserving] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setIsObserving(true);
					} else if (updateNotIntersecting) {
						setIsObserving(false);
					}
				}
			},
			{ threshold },
		);

		if (ref.current) observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref.current]);

	return isObserving;
}
