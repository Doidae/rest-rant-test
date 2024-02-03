const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/rest1.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/rest2.jpg'
    }]
    
    res.render('places/index', { places })
})
router.post('/', (req, res) => {
    res.send('POST /places stub')
})
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/places/:id', (req, res) => {

})

module.exports = router