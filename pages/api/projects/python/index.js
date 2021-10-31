export default function handler(req, res) {
	switch (req) {
		case 'GET':
			return res.status(200).json({ msg: 'success' });
		case 'POST':
			return res.status(200).json({ msg: 'success' });
	}
}
