if (document.startViewTransition) {
    document.addEventListener('click', (event) => {
        if (event.target.matches('summary')) {
            event.preventDefault();
            const details = event.target.closest('details');
            document.startViewTransition(() =>
                details.toggleAttribute('open')
            );
        }
    });
}
