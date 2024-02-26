export default {
	_id: '1',
	users: [{
		_id: 'u1',
		name: 'Vadim',
		avatar: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
	}, {
		_id: 'u2',
		name: 'Lukas',
		avatar: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
	}],
	messages: [{
		_id: 'm1',
		text: 'How are you, Lukas!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			_id: 'u1',
			name: 'Vadim',
		},
	}, {
		_id: 'm2',
		text: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			_id: 'u2',
			name: 'Lukas',
		},
	}, {
		_id: 'm3',
		text: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			_id: 'u2',
			name: 'Lukas',
		},
	}, {
		_id: 'm4',
		text: 'Good as well, preparing for the stream now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			_id: 'u1',
			name: 'Vadim',
		},
	}, {
		_id: 'm5',
		text: 'How is your uni going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			_id: 'u1',
			name: 'Vadim',
		},
	}, {
		_id: 'm6',
		text: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			_id: 'u2',
			name: 'Lukas',
		},
	}, {
		_id: 'm7',
		text: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			_id: 'u1',
			name: 'Vadim',
		},
	}]
}

