module.exports = app => {
    app.on('issues.opened', async context => {
      // `context` extracts information from the event, which can be passed to
      // GitHub API calls. This will return:
      //   { owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World !}
      const pm = context.issue({ body: 'Hello World!' })
  
      // Post a comment on the issue
      return context.github.issues.createComment(params)
    })
  }

  // to commit, you first need "git add filename" then "git commit "yourmessage"" then "git push"ggg
