const router = require("express").Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/search', (req, res) => {
    res.render('search');
})

router.get('/404', (req, res) => {
    res.status(404).render('404');
});

module.exports = router;