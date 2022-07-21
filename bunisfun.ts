export default  {
    port: 3000,
    fetch(request:  Request)  {
        return new  Response('Bun Is Fun!!');
    }
}
