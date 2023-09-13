interface BlogLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: BlogLayoutProps) {
  const { children } = props
  return <div>{children}</div>
}
