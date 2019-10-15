export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5da63982c622d1a4435d0cf5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qvfoibhz',
                  apiId: 'fb8e54ae-8d67-4fd5-9481-ca046f41b243'
                },
                {
                  buildHookId: '5da63982d4bffbc6c6b5ef20',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vssm9q6b',
                  apiId: '967084b8-255d-4321-b697-83b04a2f909a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/epheio/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vssm9q6b.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
