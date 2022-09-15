const API_END_POINT = 'https://mwu.roto-frontend.programmers.co.kr/documents';

const request = async (url, options = {}) => {
	try {
		const res = await fetch(`${API_END_POINT}${url}`, {
			...options,
			headers: {
				'Content-Type': 'application/json',
				'x-username': 'jiam',
			},
		});

		if (res.ok) {
			return await res.json();
		}

		throw new Error('API ERROR');
	} catch (e) {
		console.log(e.message);
		history.replaceState(null, null, '/404');
		window.location = `${window.location.origin}/404`;
	}
};

export { request };