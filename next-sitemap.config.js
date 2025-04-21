/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://miexperienciacomo.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/', disallow: ['/api/*'] }
      ]
    },
    changefreq: 'daily',
    priority: 0.7,
  }
