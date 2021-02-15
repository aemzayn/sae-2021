import GoogleFonts from 'next-google-fonts'
import NextHead from 'next/head'

function Head() {
  return (
    <>
      <GoogleFonts
        href='https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@800&display=swap'
      />
      <NextHead>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel='manifest' href='/site.webmanifest' /> */}
        {/* <link rel='apple-touch-icon' href='/icon.png' /> */}
        <meta name='theme-color' content='#fff' />
        <link
          rel='preload'
          href='/fonts/ProductSans/ProductSans-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/ProductSans/ProductSans-Bold.ttf'
          as='font'
          crossOrigin=''
        />
      </NextHead>
    </>
  )
}

export default Head
