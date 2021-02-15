import Head from 'next/head'
import config from './config.json'

function SEO({ title, description, keywords, author, url, image }) {
  return (
    <Head>
      <title>
        {title ? `${title} | ${config.site_title}` : config.site_title}
      </title>
      <meta
        name='description'
        content={description ? description : config.site_description}
      />
      <meta
        name='keywords'
        content={
          keywords
            ? keywords
            : config.site_keywords.map(it => it.keyword).join(',')
        }
      />
      {author && <meta name='author' content={author} />}
      <link rel='canonical' href={config.base_url + url} />

      {/* Open Graph Meta */}
      <meta property='og:site_name' content={config.site_title} />
      <meta property='og:url' content={config.base_url + url} />
      <meta
        property='og:title'
        content={title ? [title, config.site_title].join(' | ') : ''}
      />
      <meta
        property='og:description'
        content={description ? description : config.site_description}
      />
      <meta
        property='og:image'
        content={image ? image : config.base_url + '/og_image.png'}
      />
      <meta property='og:type' content='article' />
    </Head>
  )
}

export default SEO
