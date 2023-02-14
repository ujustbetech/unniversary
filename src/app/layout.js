import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
         will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link href='https://fonts.googleapis.com/css2?family=Mukta&display=swap'></link>
        <link href='https://fonts.googleapis.com/css2?family=Mukta&display=swaphttps://fonts.googleapis.com/css2?family=Forum&display=swap'></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
