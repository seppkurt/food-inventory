import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('items').select();
	return {
		items: data ?? []
	};
}
/*
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		db.createItem(data.get('amount'), data.get('name'), data.get('strage_place'), data.get('due_date'));
	}
};*/
