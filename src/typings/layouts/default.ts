type CustomDefaultLayoutProps = {
  children: React.ReactNode
}

export type DefaultLayoutProps = React.ComponentPropsWithoutRef<'main'> & CustomDefaultLayoutProps
