export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e465fbc71b65b8401e068bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bfyqqbbh',
                  apiId: '867b8ba1-be8c-42b8-8dda-7bafe637f5f4'
                },
                {
                  buildHookId: '5e465fbd21deab2096629503',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-veoghh5q',
                  apiId: '7ec2d5e7-2ad8-4436-8c39-217e9a39a62d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshcawthorne/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-veoghh5q.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
