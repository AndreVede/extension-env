module.exports = {
    manifest_version: 3,
    name: 'DEMO',
    description: 'This is a demo extension.',
    action: {
        default_popup: 'index.html',
    },
    content_scripts: [
        {
            js: ['scripts/contentScripts.js'],
            matches: ['https://*'],
        },
    ],
};
