module.exports = {
    hooks: {
        page: function (page) {
            page.content += `
                <script>
                if (window.location.host.indexOf('localhost:') !== 0) {
                    if (window.location.protocol != 'https:') {
                        window.location.protocol = 'https:'
                    }
                }
                </script>
            `
            return page
        },
    },
}
