const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1080px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "768px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('src/scss', settings);