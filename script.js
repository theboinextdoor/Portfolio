const scroll = ScrollReveal({
    reset: true,
    duration :2600,
    distance: '60px',
})
scroll.reveal('.image-transform', {delay:400, origin: 'top'})
scroll.reveal('.text-transform', {delay:300, origin: 'left'})
scroll.reveal('.logo-transform', {delay:500, origin: 'left'})
scroll.reveal('.resume-transform', {delay:500, origin: 'right'})

// scroll.reveal('.footer-transform', {delay:300, origin: 'right'})