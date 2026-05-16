import { create } from 'zustand';

interface ApplicationState {
	activeModal: string | undefined;
}

interface ApplicationActions {
	setActiveModal: (modalName: string | undefined) => void;
}

export const useApplicationStore = create<ApplicationState & ApplicationActions>((set) => ({
	activeModal: undefined,
	setActiveModal: (modalName: string | undefined) => set({ activeModal: modalName }),
}));
