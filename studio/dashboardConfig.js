export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f89f7c2324f652751fc37b0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ofycafqh',
                  apiId: '4d5537df-5fa7-4f0d-8dce-bae464faaf03'
                },
                {
                  buildHookId: '5f89f7c2da748829c18169e7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6cophqxb',
                  apiId: '20a37c6e-a352-4105-899c-488e79e377b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/solklart/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6cophqxb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
