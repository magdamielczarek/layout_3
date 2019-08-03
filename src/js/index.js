import '../scss/styles.scss';

const features = document.querySelectorAll('.features__feature,.client');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
});

features.forEach(feature => {
    observer.observe(feature);
});

