<%-
Lucy.request({
  domain: 'en.wikipedia.org',
  path: 'w/api.php',
  query: {
    action: 'query',
    prop: 'extracts',
    format: 'json',
    origin: 'http://lucybot.com',
    titles: {answer: 'title'}
  }
})
%>
