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
                  buildHookId: '5f40eedc05ebe9201fed874b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n4cokbwo',
                  apiId: 'eafa3eb3-76b4-438d-9198-dbde6bd92822'
                },
                {
                  buildHookId: '5f40eedc618e318008a4bf6c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-appinx4a',
                  apiId: 'd5ff3b6a-6cc1-4143-aeab-8739fffd4f76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ghtre1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-appinx4a.netlify.app', category: 'apps'}
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
