const urls = [ 
    'https://jsonplaceholder.typicode.com/users', 
    'https://jsonplaceholder.typicode.com/albums',
     'https://jsonplaceholder.typicode.com/posts' 
    ]
      const getData = async function(){
           const [ user, albums, post ] = 
           await Promise.all( urls.map(
               urls => fetch(urls).then(
                   res =>res.json())))
                    console.log('user', user) 
                    console.log('albums', albums)
                     console.log('post', post) }

getData()                     