mix.sass('./styles.scss', 'public/css', {
    // Use "data" for prependData instead of data.
    data:  process.env.URL + '\';'
    // single quotes needs to be added as your URL contains : (colon) so, it may create an issue. Better to escape.
 })