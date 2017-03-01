const WPAPI = require('wpapi');
const fsp = require('fs-promise');

//
const endpoint = 'https://big-andy.co.uk/wp-json';
const wp = new WPAPI({ endpoint });

const grabPosts = () => {
    wp.posts().then((data) => {
        console.log(data);

        fsp.outputJson('./data/posts.json', data)
          .then(function(){
            return fsp.readFile('./data/posts.json', {encoding:'utf8'});
          })
          .then(function(contents){
              console.log('here are the contents', contents);
          });
        // want to write data to /data/posts

    }).catch(function( err ) {
        // handle error
        console.log(err);
    });
};

grabPosts();

// fsp.outputJson('/data/posts.json', data)
//   .then(function(){
//     return fsp.readFile('/data/posts.json', {encoding:'utf8'});
//   })
//   .then(function(contents){
//       console.log('here are the contents', contents);
//   });
