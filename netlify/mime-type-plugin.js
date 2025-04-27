module.exports = {
  onPostBuild: ({ utils }) => {
    console.log('Adding custom MIME types header rules...');
    
    // Get the Netlify headers object
    const headers = {};
    
    // Add JavaScript MIME type headers
    headers['/*.js'] = [
      'Content-Type: application/javascript',
      'X-Content-Type-Options: nosniff'
    ];
    
    headers['/*.mjs'] = [
      'Content-Type: application/javascript',
      'X-Content-Type-Options: nosniff'
    ];
    
    // Add CSS MIME type headers
    headers['/*.css'] = [
      'Content-Type: text/css'
    ];
    
    // Add JSON MIME type headers
    headers['/*.json'] = [
      'Content-Type: application/json'
    ];
    
    // Write the headers file
    utils.status.show({
      title: 'MIME Type Headers',
      summary: 'Adding proper MIME type headers for JavaScript modules'
    });
    
    return utils.headers.add(headers);
  }
};
