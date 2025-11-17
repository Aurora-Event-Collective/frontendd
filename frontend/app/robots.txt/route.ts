export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.taimzeventcollective.com/'

  const content = `User-agent: *\nAllow: /\nSitemap: ${siteUrl.replace(/\/+$/,'')}/sitemap.xml\n`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  })
}
