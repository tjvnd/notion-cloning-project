import { request } from './config/index.js';

const RootDocuments = async () => {
	return await request ('', {
		method: 'GET',
	})
};

const getDocuments = async (id) => {
	return await request (`/${id}`,{
		method: 'GET',
	})
};

const createDocument = async (document) => {
	return await request('', {
		method: 'POST',
		body: JSON.stringify(document),
	});
};

const updateDocument = async (id, document) => {
	return await request(`/${id}`, {
		method: 'PUT',
		body: JSON.stringify(document),
	});
};

const deleteDocument = async (id) => {
	return await request(`/${id}`, {
		method: 'DELETE',
	});
};

export { RootDocuments, getDocuments, createDocument, updateDocument, deleteDocument };
